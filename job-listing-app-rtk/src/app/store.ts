import { configureStore } from '@reduxjs/toolkit'
import { opportunitiesApi } from './features/api'

export const store = configureStore({
  reducer: {
    [opportunitiesApi.reducerPath]: opportunitiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(opportunitiesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch