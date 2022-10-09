import { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/authSlice'
import { CardWithBackground, ProfileSettings } from './components'

export const Profile = () => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/mentors" replace />
  }
  return (
    <Fragment>
      <CardWithBackground />
      <ProfileSettings />
    </Fragment>
  )
}
