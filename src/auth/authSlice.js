import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import * as Utils from './utils'

export function fetchLogin(email, password) {
  return new Promise((resolve, reject) => {
    if (email === 'leonardo@gmail.com' && password.length > 5) {
      setTimeout(
        () =>
          resolve({
            isAuthenticated: true,
          }),
        3000
      )
    } else {
      setTimeout(() => reject('Razon del error'), 3000)
    }
  })
}

const initialState = {
  status: 'idle',
  isAuthenticated: Utils.getIsAuth(),
  userId: Utils.getUserId(),
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
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
      Utils.setIsAuth(action.payload)
    },
    setUserId: (state, action) => {
      state.userId = action.payload
      Utils.setUserId(action.payload)
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

export const { logout, setIsAuthenticated, setUserId } = authSlice.actions

export const useAuth = () => useSelector((state) => state.auth)

export default authSlice.reducer
