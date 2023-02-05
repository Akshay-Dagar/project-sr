import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import api from '../api';
import { dateOptions } from '../utils';

const Order = () => {
  const order = useSelector(state => state.selectedOrder.value)
  const [status, setStatus] = useState(order.status); // Initialize order status state
  const dispatch = useDispatch()

  const handleChange = event => {
    setStatus(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newOrder = {...order, status: status}
    dispatch(api.updateOrder(newOrder))
  }

  let createdAt = new Date(order.createdAt)

  return (
    <form onSubmit={handleSubmit}>
      {/* Display the order details */}
      <p>Order ID: {order._id}</p>
      <p>Created At: {createdAt.toLocaleDateString("en-us", dateOptions)}</p>
      <p>Username: {order.username}</p>
      <p>Status: {status}</p>
      {/* Add a dropdown menu to change the order status */}
      <label>
        Change Status:
        <select value={status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Partially Fulfilled">Partially Fulfilled</option>
          <option value="Fulfilled">Fulfilled</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default Order;
