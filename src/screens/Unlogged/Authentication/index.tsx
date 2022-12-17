import { ScreenWrapper } from '/templates/ScreenWrapper'

import { ContentWrapper, AppNameImage } from './styles'
import { Props } from "./types"

export const AuthenticationScreen = ({
  navigation
}: Props) => {
  return (
    <ScreenWrapper>
      <ContentWrapper>
        <AppNameImage
          source={require('../../../../assets/images/YellowAppName.png')}
          resizeMode="contain"
        />
      </ContentWrapper>
    </ScreenWrapper>
  )
}