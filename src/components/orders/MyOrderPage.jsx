// components/MyOrderPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderContainer from './OrderContainer';
import Cookies from 'js-cookie';
import backendUrl from '../../config';
const MyOrderPage = ({ isAdmin }) => {
  const userId=Cookies.get('userId');

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/orders/${isAdmin ? 'admin' : `user/${userId}`}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, [isAdmin, userId]);

  return (
    <div>
       <h1 className="mt-4">Order History</h1>
     <p className="text-muted">Check the status of recent orders, manage returns, and download invoices.</p>
    
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
         <OrderContainer isAdmin={isAdmin} key={orders._id} orders={orders} />   
      )}
    </div>
  );
};

export default MyOrderPage;
