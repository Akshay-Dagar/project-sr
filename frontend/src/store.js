import { configureStore } from '@reduxjs/toolkit'
import * as reducers from '../src/Reducers'

export default configureStore({
  reducer: {
    orders: reducers.ordersReducer,
    selectedOrder: reducers.selectedOrderReducer,
    message: reducers.messageReducer,
    selectedScreen: reducers.selectedScreenReducer
  }
})