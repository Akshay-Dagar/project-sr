import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaClipboardList, FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setSelectedScreen } from '../../Reducers/selectedScreen'
import './NavBar.styles.scss'

const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <div className="navbar">
        <div className="navbar__left">
            <AiFillHome className="navbar-item" onClick={() => dispatch(setSelectedScreen("createOrder"))} />
            <FaClipboardList className="navbar-item" onClick={() => dispatch(setSelectedScreen("orders"))} />
        </div>
        <div className='navbar__right'>
            <FaUser className="navbar-item" />
        </div>
    </div>
  )
}

export default NavBar