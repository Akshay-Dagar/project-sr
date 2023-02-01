import React from 'react'
import MessageBar from './MessageBar/MessageBar'
import NavBar from './NavBar/NavBar'
import CreateOrder from './CreateOrder/CreateOrder'
import Order from './Order'
import { useSelector } from 'react-redux'
import Orders from './Orders/Orders'

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
        <NavBar />
        <MessageBar />
        {getSelectedScreen()}
    </div>
  )
}

export default Home