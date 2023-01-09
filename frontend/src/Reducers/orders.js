import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    value: null
  },
  reducers: {
    setOrders: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setOrders } = ordersSlice.actions
export default ordersSlice.reducer