export const replaceAt = (
  string: string,
  index: number,
  replacement: string
) => {
  return string.substring(0, index) + replacement + string.substring(index + 1, string.length)
}