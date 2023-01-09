import { createSlice } from '@reduxjs/toolkit'

export const selectedOrderSlice = createSlice({
  name: 'selectedOrder',
  initialState: {
    value: null
  },
  reducers: {
    setSelectedOrder: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedOrder } = selectedOrderSlice.actions
export default selectedOrderSlice.reducer