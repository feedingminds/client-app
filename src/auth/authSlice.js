import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import * as Utils from './utils'

const initialState = {
  status: 'idle',
  isAuthenticated: Utils.getIsAuth(),
  userId: Utils.getUserId(),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
      Utils.setIsAuth(action.payload)
    },
    setUserId: (state, action) => {
      state.userId = action.payload
      Utils.setUserId(action.payload)
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    logout: (state, action) => {
      state.isAuthenticated = false
      state.userId = null
      state.user = null
      localStorage.clear()
    },
  },
})

export const { logout, setIsAuthenticated, setUserId, setUser } =
  authSlice.actions

export const useAuth = () => useSelector((state) => state.auth)

export default authSlice.reducer
