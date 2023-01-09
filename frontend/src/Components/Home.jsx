import React from 'react'
import MessageBar from './MessageBar'
import CreateOrder from './CreateOrder'
import Order from './Order'
import { useSelector } from 'react-redux'
import Orders from '../Reducers/orders'

const Home = () => {
  const selectedScreen = useSelector(state => state.selectedScreen.value)
  const selectedOrder = useSelector(state => state.selectedOrder.value)

  const getSelectedScreen = () => {
    return selectedOrder 
        ? <Order /> 
        : selectedScreen === 'createOrder' 
        ? <CreateOrder /> 
        : selectedScreen === 'orders'
        ? <Orders />
        : null
  }

  return (
    <div>
        {/* <NavBar /> tbd*/}
        <MessageBar />
        {getSelectedScreen()}
    </div>
  )
}

export default Home