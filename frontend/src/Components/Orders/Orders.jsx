import React, { useEffect } from 'react';
import api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import OrderThumb from './OrderThumb';

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.value)

  useEffect(() => {
    dispatch(api.getOrders())
  }, [])
  

  const handleOrderStatusChange = (order, newStatus) => {
    order.status = newStatus
    dispatch(api.updateOrder(order))
  }

  return (
    <div className='orders-container'>
      {/* Display a list of orders */}
      {orders?.map(order => (
        <div key={`order-${order._id}`} className="order-root">
          <OrderThumb order={order}/>
          {/* <div className='order-actions'>
            <button><BsTrashFill /></button>
            <label htmlFor="mark-as-dropdown">Mark as</label>
            <select
              id="mark-as-dropdown"
              onChange={event => handleOrderStatusChange(order, event.target.value)}
            >
              <option value="Completed">Completed</option>
              <option value="Partially Completed">Partially Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <button onClick={() => dispatch(setSelectedOrder(order))}>View</button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Orders