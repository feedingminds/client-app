export function fetchLogin(email, password) {
  return new Promise((resolve, reject) => {
    if (email === 'leonardo@gmail.com' && password.length > 5) {
      setTimeout(
        () =>
          resolve({
            isAuthenticated: true,
          }),
        3000
      )
    } else {
      setTimeout(() => reject('Razon del error'), 3000)
    }
  })
}
