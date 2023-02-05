import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaClipboardList, FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setSelectedScreen } from '../../Reducers/selectedScreen'
import { setSelectedOrder } from '../../Reducers/selectedOrder'
import './NavBar.styles.scss'

const NavBar = () => {
  const dispatch = useDispatch()

  const handleClickHome = () => {
    dispatch(setSelectedOrder(null))
    dispatch(setSelectedScreen("createOrder"))
  }

  const handleClickOrders = () => {
    dispatch(setSelectedOrder(null))
    dispatch(setSelectedScreen("orders"))
  }
  return (
    <div className="navbar">
          <AiFillHome className="navbar-item" onClick={handleClickHome} style={{order: 1}} />
          <FaClipboardList className="navbar-item" onClick={handleClickOrders} style={{order: 0}} />
          <FaUser className="navbar-item" style={{order: 2}} />
    </div>
  )
}

export default NavBar