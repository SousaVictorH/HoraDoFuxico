import { api } from 'services/api'

import {
  REQUEST_LOGIN,
  LOGIN,
} from 'resources/url';

export const requestLogin = async (phoneNumber: string) => {
  try {
    const response = await api.post(REQUEST_LOGIN + phoneNumber)

    return {
      ...response,
      error: null
    }
  } catch (error) {
    return { error }
  }
}

export const login = async (phoneNumber: string, token: string) => {
  try {
    const data = { phoneNumber, token }

    const response = await api.post(LOGIN, data)

    return {
      ...response,
      error: null
    }
  } catch (error) {
    console.log(error)
    return { error }
  }
}
