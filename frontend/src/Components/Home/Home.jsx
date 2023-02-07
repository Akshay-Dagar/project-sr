import React from 'react'
import NavBar from '../NavBar/NavBar'
import MessageBar from '../MessageBar/MessageBar'
import CreateOrder from '../CreateOrder/CreateOrder'
import Order from '../Order'
import { useSelector } from 'react-redux'
import Orders from '../Orders/Orders'
import Profile from '../Profile/Profile'
import Login from '../Auth/Login'
import './Home.styles.scss'

const Home = () => {
  const selectedScreen = useSelector(state => state.selectedScreen.value)
  const selectedOrder = useSelector(state => state.selectedOrder.value)

  const getSelectedScreen = () => {
    if (selectedScreen === 'login')
      return <Login />
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
    <div className='home'>
        <MessageBar />
        {getSelectedScreen()}
        {selectedScreen !== 'login' && selectedScreen !== 'signup' && <NavBar />}
    </div>
  )
}

export default Home