import { Container, Caption } from './styles'
import { Props } from './types'

import { phoneInputPlaceholder } from 'constants/texts'

export const PhotoInput = ({
  photo,
  setPhoto,
  style
}: Props) => {
  return (
    <Container style={style}>
      <Caption>{phoneInputPlaceholder}</Caption>
    </Container>
  )
}