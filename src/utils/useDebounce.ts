/* eslint-disable @typescript-eslint/ban-types */
import { useRef } from 'react'

export const useDebounce = (fn: Function, delay: number) => {

  const timeoutRef = useRef<any>(undefined)

  function debounce(...args: any[]) {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debounce
}
