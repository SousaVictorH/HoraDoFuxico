import React, { useState } from 'react'

import { FormWrapper } from 'templates/FormWrapper'

import {
  reedOur,
  useTerms,
  readNagreed,
  next
} from 'constants/texts'

import {
  Label,
  TextButton,
  RadioInput,
  Button
} from './styles'
import { Props } from './types'

export const TermsForm = ({
  onNext,
  onShowTerms
}: Props) => {
  const [agreed, setAgreed] = useState(false)

  const handlePress = () => {
    if (agreed) onNext()
  }

  return (
    <FormWrapper justifyContent="flex-start" >
      <Label>
        {reedOur}
        <TextButton
          onPress={onShowTerms}
          text={useTerms}
          appearance="secondary"
        />
      </Label>
      <RadioInput
        active={agreed}
        onPress={() => setAgreed(!agreed)}
        text={readNagreed}
      />
      <Button
        onPress={handlePress}
        disabled={!agreed}
        text={next}
        marginTop="auto"
      />
    </FormWrapper>
  )
}
