import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import authReducer from '../auth/authSlice'
import { authAPI } from '../auth/authApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})
