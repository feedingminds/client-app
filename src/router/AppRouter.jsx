import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../auth/components'
import { Home } from '../home'
import { Layout } from '../layout'
import { MentorsGrid } from '../mentors'
import { Profile } from '../profile'
import { Sessions } from '../sessions'

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mentors" element={<MentorsGrid />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </HashRouter>
  )
}
