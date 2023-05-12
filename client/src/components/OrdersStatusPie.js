import React, { Component, useState, useEffect } from 'react';
import axios from '../axios';
import Loading from '../components/Loading';
import './OrdersStatusPie.css';
import {
  Chart as CahrtJS,
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

CahrtJS.register(
 ArcElement,
 Tooltip,
 Legend   
);

function OrdersStatusPie() {
    
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect (() => {
      setLoading(true);
      axios.get("/orders")
          .then(({ data }) => {
              setLoading(false);
              setOrders(data);      
          }).catch((e) => {
              setLoading(false);
              console.log(e);
          })
  }, []);

  const ordersCountByStatus = {};

    const countByStatus = orders.reduce((acc,item) => {
        console.log("owner: " + item.owner);
        console.log("status: " + item.status);
        const key = item.status;
        if (ordersCountByStatus[key]) {
            ordersCountByStatus[key]++;
         } else {
            ordersCountByStatus[key] = 1;
        }
        return ordersCountByStatus;
    },{})

    const labels = Object.keys(ordersCountByStatus);
    const data = Object.values(ordersCountByStatus);

    const pieData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }
        ]
    };

    const options = {
        
    }

  return (
    <div className='ordersStatusPie'>
        <h1>Orders Status</h1>
        <div style={
            {
            padding: '20px',
            width: '30%',
            marginLeft: '330px'
            }
        }>
            <Pie
                data = {pieData}
                options = {options}
                >                
            </Pie>
        </div>
    </div>
  )
}

export default OrdersStatusPie