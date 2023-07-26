import { api } from 'services/api'

import {
  REQUEST_LOGIN,
  LOGIN,
  SIGN_UP,
  UPDATE,
  USERS_LIST,
  SCHEDULES
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
    return { data: {}, error }
  }
}

export const signUp = async (name: string, birthDate: string, phoneNumber: string, avatar?: string) => {
  try {
    const data = { name, birthDate, phoneNumber, avatar }

    const response = await api.post(SIGN_UP, data)

    return {
      ...response,
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
      ...response,
      error: null
    }
  } catch (error) {
    return { data: {}, error }
  }
}

export const getUsers = async (
  searchField: string,
  page: number,
  limit = 10
) => {
  try {
    const url = `${USERS_LIST}?page=${page}&limit=${limit}&search=${searchField || ''}`

    const response = await api.get(url)

    return {
      ...response,
      error: null
    }
  } catch (error) {
    return { data: {}, error }
  }
}

export const createSchedule = async (
  userId: string,
  category: string,
  date: string,
  time?: string
) => {
  try {
    const url = `${SCHEDULES}${userId}`

    const response = await api.post(url, { category, date, time })

    return {
      ...response,
      error: null
    }
  } catch (error) {
    return { data: {}, error }
  }
}

export const loadSchedules = async (
  userId: string,
  page: number,
  limit = 10
) => {
  try {
    const url = `${SCHEDULES}${userId}?page=${page}&limit=${limit}`

    const response = await api.get(url)

    return {
      ...response,
      error: null
    }
  } catch (error) {
    return { data: {}, error }
  }
}
