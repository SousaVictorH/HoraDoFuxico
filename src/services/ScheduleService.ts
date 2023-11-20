import { api } from './api'

import {
  SCHEDULES
} from 'resources/url'

export class ScheduleService {
  public static loadSchedules = (
    userId: string,
    page: number,
    limit = 10
  ) => {
    const url = `${SCHEDULES}${userId}?page=${page}&limit=${limit}`

    return api.get(url)
  }

  public static createSchedule = (
    userId: string,
    category: string,
    date: string,
    time?: string
  ) => {
    const url = `${SCHEDULES}${userId}`

    return api.post(url, { category, date, time })
  }

  public static loadSchedule = (
    scheduleId: string
  ) => {
    const url = `${SCHEDULES}details/${scheduleId}`

    return api.get(url)
  }
}
