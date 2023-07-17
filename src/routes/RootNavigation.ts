import React from 'react'

import { WELCOME_SCREEN } from 'constants/screens'

export const navigationRef = React.createRef<any>()

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params)
}

export function reset() {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: WELCOME_SCREEN }]
  })
}
