import React, { useState } from 'react';
import { useSelector } from 'react-redux'

const Order = ({ handleStatusChange }) => {
  const order = useSelector(state => state.selectedOrder.value)
  const [status, setStatus] = useState(order.status); // Initialize order status state

  const handleChange = event => {
    setStatus(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Call the handleStatusChange function to update the order status
    handleStatusChange(order.id, status);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Display the order details */}
      <p>Order ID: {order.id}</p>
      <p>Timestamp: {order.timestamp}</p>
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
