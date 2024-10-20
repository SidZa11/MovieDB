import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/search/searchSlice'
import apiReducer from '../features/api/apiSlice'
import currentMovieReducer from '../features/movie/currentMovieSlice'

export default configureStore({
  reducer: {
    search: searchReducer, // Add the search reducer to the store
    api : apiReducer,
    currentMovie : currentMovieReducer
  },
})