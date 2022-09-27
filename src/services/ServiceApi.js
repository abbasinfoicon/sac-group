import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/'
    }),
// https://jsonplaceholder.typicode.com/posts
    endpoints: (builder) => ({
        getAllSers: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),

        getAllSlider: builder.query({
            query: () => ({
                url: 'sliders',
                method: 'GET'
            })
        })
    })
})

export const { useGetAllSersQuery, useGetAllSliderQuery } = serviceApi;