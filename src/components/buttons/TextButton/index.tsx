import { Container, Text } from './styles'
import { Props } from "./types"

export const TextButton = ({
  onPress,
  text,
  style,
  appearance
}: Props) => {
  return (
    <Container
      onPress={onPress}
      style={style}
    >
      <Text appearance={appearance}>{text}</Text>
    </Container>
  )
}

TextButton.defaultProps = {
  text: '',
  appearance: 'primary'
}
