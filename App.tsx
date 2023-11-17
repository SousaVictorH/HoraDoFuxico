import React, { useEffect } from 'react'

import registerNNPushToken, { getPushDataObject } from 'native-notify'

import App from './src'

export default () => {
  registerNNPushToken(15006, 'GjaYR5H3p888rbYvfB8srT')

  const pushDataObject = getPushDataObject()

  useEffect(() => {
    console.log(pushDataObject)
  }, [pushDataObject])

  return (<App />)
}
