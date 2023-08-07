import styled from "styled-components/native"

import { getWindowHeight, getWindowWidth } from "utils/dimensions"

export const ContentWrapper = styled.View`
  flex: 1;
  width: ${getWindowWidth()}px;
  height: ${getWindowHeight()}px;
`
