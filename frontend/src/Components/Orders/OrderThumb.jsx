import React from 'react'
import { dateOptions } from '../../utils';
import { setSelectedOrder } from '../../Reducers/selectedOrder';
import { useDispatch } from 'react-redux';

import './Orders.styles.scss'

const OrderThumb = (props) => {
  const dispatch = useDispatch()

  let order = props.order
  let createdAt = new Date(order.createdAt)

  return (
    <div className='order-content__container' onClick={() => dispatch(setSelectedOrder(order))}>
      {props.order?.images?.length ? 
        <img src={props.order.images[0]} className='order-thumbnail' alt='Failed to Load' /> : 
        null}
      <div className='order-content__body'>
        <p><b>Order ID:</b> {order._id}</p>
        <p><b>Created At:</b> {createdAt.toLocaleDateString("en-us", dateOptions)}</p>
        <p><b>Username:</b> {order.username}</p>
        <p><b>Status:</b> {order.status}</p>
      </div>
    </div>
  );
};

export default OrderThumb;
