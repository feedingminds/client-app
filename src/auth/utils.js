export const getIsAuth = () => {
  return localStorage.getItem('IS_AUTHENTICATED')
    ? JSON.parse(localStorage.getItem('IS_AUTHENTICATED'))
    : false
}

export const setIsAuth = (isLoggedIn) => {
  localStorage.setItem('IS_AUTHENTICATED', JSON.stringify(isLoggedIn))
}

export const getUserId = () => {
  return localStorage.getItem('USER_ID')
    ? JSON.parse(localStorage.getItem('USER_ID'))
    : null
}

export const setUserId = (userId) => {
  localStorage.setItem('USER_ID', JSON.stringify(userId))
}
