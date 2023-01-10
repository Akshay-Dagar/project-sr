import React, { useEffect } from 'react';
import api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import setSelectedOrder from '../Reducers/selectedOrder';

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
    <div>
      {/* Display a list of orders */}
      {orders?.map(order => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>Status: {order.status}</p>
          <div>
            <label htmlFor="mark-as-dropdown">Mark as</label>
            <select
              id="mark-as-dropdown"
              onChange={event => handleOrderStatusChange(order, event.target.value)}
            >
              <option value="Completed">Completed</option>
              <option value="Partially Completed">Partially Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button onClick={dispatch(setSelectedOrder(order))}>View</button>
        </div>
      ))}
    </div>
  );
};

export default Orders