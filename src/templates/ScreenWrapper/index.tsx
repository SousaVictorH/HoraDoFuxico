import { Wrapper, ScrollView, Container } from './styles'
import { ScreenWrapperProps } from './types'

export const ScreenWrapper = ({
  children,
  scroll,
  behavior
}: ScreenWrapperProps) => {
  if (scroll) {
    return (
      <Wrapper behavior={behavior} >
        <ScrollView>
          <Container>{children}</Container>
        </ScrollView>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

ScreenWrapper.defaultProps = {
  scroll: false,
  behavior: 'position'
}
