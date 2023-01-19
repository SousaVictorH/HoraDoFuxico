export const maskDate = (date: string) => {
  let d = date.replace(/\D/g, '').slice(0, 10);

  if (d.length >= 5) {
    return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
  }
  else if (d.length >= 3) {
    return `${d.slice(0, 2)}/${d.slice(2)}`;
  }

  return d
}

export const validateDate = (date: Date) => {
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (!isNaN(date.getTime())) return true
    else return false
  }

  return false
}

export const validateBirthDate = (d: string) => {
  const date = new Date(d)

  // Is valid
  if (!validateDate(date)) return false

  const age = calculateAge(date)

  // Validate age
  if (age >= 120 || age <= 18) return false

  return true
}

export const calculateAge = (birthDate: Date) => {
  const currentDate = new Date()

  const diff = birthDate.getTime() - currentDate.getTime()

  const daysOld = Math.floor(diff / (1000 * 60 * 60 * 24))

  const yearsOld = Number((daysOld / 365).toFixed(0))

  return yearsOld
}