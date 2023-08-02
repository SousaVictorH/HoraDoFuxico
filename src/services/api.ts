import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Toast from "react-native-toast-message"

import { useUserStore } from "store/user"
import * as RootNavigation from 'routes/RootNavigation'

export const api = axios.create({
  baseURL: 'http://192.168.0.103:8000',
  timeout: 5000
})

// Request interceptor
api.interceptors.request.use((req: InternalAxiosRequestConfig<any>) => {
  const { token, id } = useUserStore.getState()

  req.headers.Authorization = token

  return req
})

// Response interceptor
api.interceptors.response.use(res => res, (error: AxiosResponse<any, any>) => {
  const statusText = error + ''

  if ((statusText.indexOf('403') !== -1) && (error.config.url !== '/login')) {
    // Expired token
    Toast.show({
      type: 'error',
      text1: 'Alerta',
      text2: 'Seu token expirou, redirecionando...'
    })

    setTimeout(() => {
      const { clearPersonalData } = useUserStore.getState()

      clearPersonalData()
      RootNavigation.reset()
    }, 1800)

    return {}
  }

  throw error
})
