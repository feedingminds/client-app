import { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { setUser, useAuth } from '../../auth/authSlice'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

export const Layout = () => {
  const { userId } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    if (userId) {
      fetch(import.meta.env.VITE_APP_API_URL + `/users/${userId}`)
        .then((res) => res.json())
        .then((user) => {
          dispatch(setUser(user))
        })
    }
  }, [userId, dispatch])

  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
