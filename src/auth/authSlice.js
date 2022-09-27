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
    logout: (state) => {
      state.isAuthenticated = false
      Utils.setIsAuth(false)
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
      Utils.setIsAuth(action.payload)
    },
    setUserId: (state, action) => {
      state.userId = action.payload
      Utils.setUserId(action.payload)
    },
  },
})

export const { logout, setIsAuthenticated, setUserId } = authSlice.actions

export const useAuth = () => useSelector((state) => state.auth)

export default authSlice.reducer
