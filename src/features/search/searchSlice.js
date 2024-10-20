import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchText: '', // The initial state of the search text
  },
  reducers: {
    updateSearchText: (state, action) => {
      state.searchText = action.payload // Update the state with the new input
    }
  },
})

// Export action creators
export const { updateSearchText } = searchSlice.actions

// Export the reducer to be used in the Redux store
export default searchSlice.reducer
