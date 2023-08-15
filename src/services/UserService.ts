import { api } from './api'

import {
  REQUEST_LOGIN,
  LOGIN,
  SIGN_UP,
  UPDATE,
  USERS
} from 'resources/url'

export class UserService {
  public static requestLogin = (phoneNumber: string) => {
    return api.post(REQUEST_LOGIN + phoneNumber)
  }

  public static login = (phoneNumber: string, token: string) => {
    const data = { phoneNumber, token }

    return api.post(LOGIN, data)
  }

  public static signUp = (
    name: string,
    birthDate: string,
    phoneNumber: string,
    avatar?: string
  ) => {
    const data = { name, birthDate, phoneNumber, avatar }

    return api.post(SIGN_UP, data)
  }

  public static update = (
    userId: string,
    name: string,
    birthDate: string,
    phoneNumber: string,
    avatar?: string
  ) => {
    const data = { name, birthDate, phoneNumber, avatar }

    return api.put(UPDATE + userId, data)
  }

  public static getUsers = (
    searchField: string,
    page: number,
    limit = 10
  ) => {
    const url = `${USERS}?page=${page}&limit=${limit}&search=${searchField || ''}`

    return api.get(url)
  }
}
