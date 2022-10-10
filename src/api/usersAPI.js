import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../constants'

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + '/users',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
    },
  }),
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    getMentors: builder.query({
      query: (params) => ({
        url: '',
        params: {
          role: 'MENTOR_ROLE',
          ...params,
        },
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
    updateUser: builder.mutation({
      query: ([id, data]) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMentorsQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} = usersAPI
