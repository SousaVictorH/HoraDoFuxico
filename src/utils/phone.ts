export const phoneMask = (value: string, withParentheses = false) => {
  if (!value) return ''

  value = value.replace(/\D/g, '')
  if (withParentheses) value = value.replace(/(\d{2})(\d)/, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')

  return value
}
