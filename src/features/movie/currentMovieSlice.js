import { createSlice } from '@reduxjs/toolkit'

export const currentMovieSlice = createSlice({
  name: 'currentMovie',
  initialState: {
    currentMovieId: '', // The initial state of the currentMovie Id
  },
  reducers: {
    updatecurrentMovieId: (state, action) => {
      state.currentMovieId = action.payload // Update the state with the new input
    }
  },
})

// Export action creators
export const { updatecurrentMovieId } = currentMovieSlice.actions

// Export the reducer to be used in the Redux store
export default currentMovieSlice.reducer
