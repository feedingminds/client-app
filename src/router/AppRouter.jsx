import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../auth/components'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'login'} replace={true} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
