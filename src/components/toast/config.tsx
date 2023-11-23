import React from 'react'
import { View, Text } from 'react-native'

import {
  ToastProps,
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastConfig,
  ToastConfigParams
} from 'react-native-toast-message'

export const toastConfig: ToastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      // style={{ borderLeftColor: 'pink' }}
      // contentContainerStyle={{ paddingHorizontal: 15 }}
      // text1Style={{
      //   fontSize: 15,
      //   fontWeight: '400'
      // }}
      // text2Style={{
      //   fontSize: 15
      // }}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
    />
  ),
  info: (props: ToastProps) => (
    <InfoToast
      {...props}
    />
  ),
  newTypeToast: ({ text1, props }: ToastConfigParams<any>) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
      <Text>{props.message}</Text>
    </View>
  )
}

// USE EXAMPLE
// Toast.show({
//   type: 'newTypeToast',
//   props: { message: 'This is a message example' }
// })
