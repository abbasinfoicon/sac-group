import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { serviceApi } from '../services/ServiceApi'

export const store = configureStore({
    reducer: {
        [serviceApi.reducerPath]: serviceApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serviceApi.middleware),
})

setupListeners(store.dispatch)