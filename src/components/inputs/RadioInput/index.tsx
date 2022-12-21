import {
  Container,
  Radio,
  RadioInner,
  Text,
} from './styles'
import { Props } from "./types"

export const RadioInput = ({
  active,
  onPress,
  text,
  style
}: Props) => {
  return (
    <Container
      onPress={onPress}
      style={style}
    >
      <Radio>
        {active && <RadioInner />}
      </Radio>
      {text && (
        <Text>{text}</Text>
      )}
    </Container>
  )
}