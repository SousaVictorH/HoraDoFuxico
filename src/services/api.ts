import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Toast from "react-native-toast-message"

import { useUserStore } from "store/user"
import * as RootNavigation from 'routes/RootNavigation';

export const api = axios.create({
  baseURL: 'http://10.0.0.151:8000',
  timeout: 5000
})

// Request interceptor
api.interceptors.request.use((req: InternalAxiosRequestConfig<any>) => {
  const { token } = useUserStore.getState()

  req.headers.Authorization = token

  return req
})

// Response interceptor
api.interceptors.response.use(res => res, (res: AxiosResponse<any, any>) => {
  const statusText = res + ''

  if ((statusText.indexOf('403') !== -1) && (res.config.url !== '/login')) {
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
  }

  throw res
})
