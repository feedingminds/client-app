import { useSelector } from 'react-redux'
import { usersAPI } from '../api/usersAPI'

export const useGetUserById = (userId) => {
  return useSelector(usersAPI.endpoints.getUserById.select(userId))
}
