export const hasUndefinedParam = (obj: any) => {
  for (let key in obj) {
    if (!obj[key]) {
      return true;
    }
  }
  return false;
};
