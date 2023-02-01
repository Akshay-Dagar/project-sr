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
        <div className="navbar__left">
            <AiFillHome className="navbar-item" onClick={handleClickHome} />
            <FaClipboardList className="navbar-item" onClick={handleClickOrders} />
        </div>
        <div className='navbar__right'>
            <FaUser className="navbar-item" />
        </div>
    </div>
  )
}

export default NavBar