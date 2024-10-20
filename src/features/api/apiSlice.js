import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    apiText: 'c45a857c193f6302f2b5061c3b85e743', // The initial state of the api text
  },
  reducers: {
    updateapiText: (state, action) => {
      state.apiText = action.payload // Update the state with the new input
    }
  },
})

// Export action creators
export const { updateapiText } = apiSlice.actions

// Export the reducer to be used in the Redux store
export default apiSlice.reducer
