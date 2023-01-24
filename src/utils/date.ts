import moment from "moment";

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

export const validateBirthDate = (d: string) => {
  const currentDate = moment(new Date())
  const date = moment(d, "DD/MM/YYYY")

  if (date.isValid()) {
    const age = currentDate.diff(date, 'years')

    // Validate age
    if (age > 120) return {
      isValid: false,
      message: 'Voce realmente tem mais de 120 anos? :O'
    }

    if (age < 18) return {
      isValid: false,
      message: 'Menores de idade nao sao permitidos no aplicativo :('
    }

    return {
      isValid: true,
      message: ''
    }
  }

  return {
    isValid: false,
    message: 'Data de aniversário contém erro.'
  }
}

export const calculateAge = (d: string) => {
  const currentDate = moment(new Date())
  const date = moment(d, "DD/MM/YYYY")

  const age = currentDate.diff(date, 'years')

  return age
}