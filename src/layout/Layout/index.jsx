import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

export const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
