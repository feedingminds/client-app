import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../auth/components'
import { Layout } from '../layout'
import { Mentor } from '../mentor'
import { Session } from '../mentor/components/Session'
import { MentorsGrid } from '../mentors'
import { Profile } from '../profile'
import { Sessions } from '../sessions'

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="mentors" replace={true} />} />
          <Route path="mentors" element={<MentorsGrid />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mentor" element={<Outlet />}>
            <Route index element={<Navigate to="/mentors" replace={true} />} />
            <Route path=":mentorId" element={<Outlet />}>
              <Route index element={<Mentor />} />
              <Route path="session" element={<Session />} />
            </Route>
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </HashRouter>
  )
}
