import { api } from 'services/api'

import {
  REQUEST_LOGIN,
  LOGIN,
  SIGN_UP,
  UPDATE
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
      data: response.data,
      error: null
    }
  } catch (error) {
    return { data: {}, error }
  }
}

export const signUp = async (name: string, birthDate: string, phoneNumber: string, avatar?: string) => {
  try {
    const data = { name, birthDate, phoneNumber, avatar }

    const response = await api.post(SIGN_UP, data)

    return {
      data: response.data,
      error: null
    }
  } catch (error) {
    return { data: {}, error }
  }
}

export const update = async (
  userId: string,
  name: string,
  birthDate: string,
  phoneNumber: string,
  avatar?: string
) => {
  try {
    const data = { name, birthDate, phoneNumber, avatar }

    const response = await api.put(UPDATE + userId, data)

    return {
      data: response.data,
      error: null
    }
  } catch (error) {
    return { data: {}, error }
  }
}
