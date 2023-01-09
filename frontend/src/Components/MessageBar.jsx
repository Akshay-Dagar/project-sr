import React, {useEffect} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { clearMessage } from '../Reducers/message'

const MessageBar = () => {
  const message = useSelector(state => state.message.value)
  const messageType = useSelector(state => state.message.type)       //to set background color to red or green or blue (for info)
  const dispatch = useDispatch()
  
  const handleClose = () => {
    dispatch(clearMessage())
  }
  
  return (
    message ? 
      <div>
        <span>{message}</span>
        <button onClick={handleClose}><AiOutlineClose /></button>
      </div>
      : null
  )
}

export default MessageBar