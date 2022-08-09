import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { fetchLogin } from './authApi'
import * as Utils from './utils'

const initialState = {
  status: 'idle',
  isAuthenticated: Utils.getIsAuth(),
}

export const login = createAsyncThunk('auth/login', async (data, thunkApi) => {
  try {
    const response = await fetchLogin(data.email, data.password)
    return response.isAuthenticated
  } catch (error) {
    console.error('ERROR:', error)
    alert(error)
    return thunkApi.rejectWithValue(error)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      Utils.setIsAuth(false)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'idle'
      state.isAuthenticated = action.payload
      Utils.setIsAuth(true)
    })
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'error'
    })
  },
})

export const { logout } = authSlice.actions

export const useAuth = () => useSelector((state) => state.auth)

export default authSlice.reducer
