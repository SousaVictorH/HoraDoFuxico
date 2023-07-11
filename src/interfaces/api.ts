import { api } from 'services/api'

import {
  REQUEST_LOGIN,
  LOGIN,
} from 'resources/url';

export const requestLogin = async (phoneNumber: string) => {
  try {
    return await api.post(REQUEST_LOGIN + phoneNumber)
  } catch (error) {
    return { error }
  }
}

export const login = async (phoneNumber: string, token: string) => {
  try {
    const data = { phoneNumber, token }

    return await api.post(LOGIN, data)
  } catch (error) {
    return { error }
  }
}
