import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

import moment from 'moment'

import { AxiosResponse } from 'axios'
import { UserService } from 'services/UserService'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { EditProfileForm } from 'components/forms/EditProfile'
import { HeaderButton } from 'components/buttons/Header'

import { editYourInfo } from 'constants/texts'

import { useUserStore } from 'store/user'

import { validateBirthDate } from 'utils/date'

import { Props } from './types'
import { Wrapper, ContentWrapper } from './styles'

export const EditProfileScreen = ({ navigation }: Props) => {
  const { id, name, avatar, phoneNumber, birthDate, setPersonalData } =
    useUserStore()

  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (
    newName: string,
    newPhoneNumber: string,
    newBirthDate: string,
    newPhoto?: string,
  ) => {
    if (isLoading) return

    const { isValid, message } = validateBirthDate(newBirthDate)

    if (!isValid) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: message,
      })
    }

    const newPhone = newPhoneNumber.replace('-', '')

    setIsLoading(true)

    UserService.update(id, newName, newBirthDate, newPhone, newPhoto)
      .then((response: AxiosResponse<any>) => {
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Seus dados foram atualizados com sucesso',
        })

        setPersonalData(response.data)

        setTimeout(() => navigation.goBack(), 300)
      })
      .catch(() => {
        return Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Algo ao atualizar os dados',
        })
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <LoggedWrapper navigation={navigation} hideHeader scroll>
      <Wrapper>
        <HeaderButton onPress={() => navigation.goBack()} text={editYourInfo} />
        <ContentWrapper>
          <EditProfileForm
            name={name}
            phoneNumber={phoneNumber}
            birthDate={moment(birthDate).format('DD/MM/YYYY')}
            photo={avatar}
            handleSubmit={handleSave}
          />
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}
