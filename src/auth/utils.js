export const getIsAuth = () => {
  return localStorage.getItem('IS_AUTHENTICATED')
    ? JSON.parse(localStorage.getItem('IS_AUTHENTICATED'))
    : false
}

export const setIsAuth = (isLoggedIn) => {
  localStorage.setItem('IS_AUTHENTICATED', JSON.stringify(isLoggedIn))
}
