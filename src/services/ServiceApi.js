import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
// https://jsonplaceholder.typicode.com/posts
    endpoints: (builder) => ({
        getAllSers: builder.query({
            query: () => ({
                url: 'products',
                method: 'GET'
            })
        })
    })
})

export const { useGetAllSersQuery } = serviceApi;