import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../auth/components'
import { Layout } from '../layout'
import { MentorsGrid } from '../mentors'

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Publicaciones recientes</h1>} />
          <Route path="mentors" element={<MentorsGrid />} />
          <Route path="courses" element={<>Cursos</>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </HashRouter>
  )
}
