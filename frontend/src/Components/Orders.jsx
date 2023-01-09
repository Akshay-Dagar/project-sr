import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]); // Initialize orders state

  const handleOrderStatusChange = (orderId, newStatus) => {
    // Update the status of the order with the given ID
    setOrders(prevOrders => prevOrders.map(order => {
      if (order.id === orderId) {
        return {
          ...order,
          status: newStatus
        };
      }
      return order;
    }));
  };

  return (
    <div>
      {/* Display a list of orders */}
      {orders.map(order => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
          {/* Add buttons to change the order status */}
          <button onClick={() => handleOrderStatusChange(order.id, 'Partially Fulfilled')}>
            Mark as Partially Fulfilled
          </button>
          <button onClick={() => handleOrderStatusChange(order.id, 'Fulfilled')}>
            Mark as Fulfilled
          </button>
          <button onClick={() => handleOrderStatusChange(order.id, 'Cancelled')}>
            Cancel Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders