import AppWrapper from "./templates/AppWrapper"

import { Router } from "./routes"

export default () => {
  return (
    <AppWrapper>
      <Router />
    </AppWrapper>
  )
}
