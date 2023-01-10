import { createSlice } from '@reduxjs/toolkit'

export const selectedScreenSlice = createSlice({
  name: 'selectedScreen',
  initialState: {
    value: "orders"
  },
  reducers: {
    setSelectedScreen: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedScreen } = selectedScreenSlice.actions
export default selectedScreenSlice.reducer