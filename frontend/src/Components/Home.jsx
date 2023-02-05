import React from 'react'
import MessageBar from './MessageBar/MessageBar'
import NavBar from './NavBar/NavBar'
import CreateOrder from './CreateOrder/CreateOrder'
import Order from './Order'
import { useSelector } from 'react-redux'
import Orders from './Orders/Orders'
import Profile from './Profile/Profile'

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
        : selectedScreen === 'profile'
        ? <Profile />
        : null
  }

  return (
    <div>
        <MessageBar />
        {getSelectedScreen()}
        <NavBar />
    </div>
  )
}

export default Home