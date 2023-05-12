import React, { Component, useState, useEffect } from 'react';
import axios from '../axios';
import Loading from '../components/Loading';
import './BarChart.css';
import {
  Chart as CahrtJS,
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from "react-chartjs-2";

CahrtJS.register(
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend
)

function BarChart() {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect (() => {
      setLoading(true);
      axios.get("/users")
          .then(({ data }) => {
              setLoading(false);
              setUsers(data);      
          }).catch((e) => {
              setLoading(false);
              console.log(e);
          })
  }, []);

  
  const usersCountsByMonth ={};

  const countsByMonth = users.reduce((acc, item) => {
    if(item.timeCreated){
      const date = new Date(item.timeCreated);
      const month = date.getMonth();
      const year = date.getFullYear();
      const key = `${year}-${month}`;
      console.log("key: " + key);
        if (usersCountsByMonth[key]) {
          usersCountsByMonth[key]++;
        } else {
          usersCountsByMonth[key] = 1;
        }
    }
    
    return usersCountsByMonth;
  }, {});


  if(loading) {
      return <Loading />;
  }

  const currentDate = new Date();

  const sixMonthsAgo1 = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getFullYear();
  const sixMonthsAgo2 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1).getFullYear();
  const sixMonthsAgo3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-2, 1).getFullYear();
  const sixMonthsAgo4 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-3, 1).getFullYear();
  const sixMonthsAgo5 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 4, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-4, 1).getFullYear();
  const sixMonthsAgo6 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-5, 1).getFullYear();
  const sixMonthsAgo7 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-6, 1).getFullYear();
  const sixMonthsAgo8 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 7, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-7, 1).getFullYear();
  const sixMonthsAgo9 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 8, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-8, 1).getFullYear();
  const sixMonthsAgo10 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 9, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-9, 1).getFullYear();
  const sixMonthsAgo11 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 10, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-10, 1).getFullYear();
  const sixMonthsAgo12 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 11, 1).getMonth()+1 + "/" + new Date(currentDate.getFullYear(), currentDate.getMonth()-11, 1).getFullYear();


  const data = {
    labels: [sixMonthsAgo12, sixMonthsAgo11, sixMonthsAgo10, sixMonthsAgo9, sixMonthsAgo8, sixMonthsAgo7, 
      sixMonthsAgo6, sixMonthsAgo5, sixMonthsAgo4, sixMonthsAgo3, sixMonthsAgo2, sixMonthsAgo1],
    datasets: [
      {
        label: 'New users by months',
        data: [
          usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-11, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-11, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-10, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-10, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-9, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-9, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-8, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-8, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-7, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-7, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-6, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-6, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-5, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-5, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-4, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-4, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-3, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-3, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-2, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-2, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 1).getMonth()]
          ,usersCountsByMonth[new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getFullYear() + "-" +new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getMonth()]
          ],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1
      }
    ],
  }

  

	const options = {
    scales: {
      y: {
          ticks: {
              precision: 0
          }
      } 
    } 
  }
  
  
  return (
    <div className="Barchart">
      <h1 style={{width: '100%'}}>New users by month</h1>
      <div style={
        {height: '300px', width: '80%', paddingLeft: '100px'}
      }>
        <Bar
          data={data}
          options={options}
        ></Bar>
      </div>
    </div>
  );
}
export default BarChart