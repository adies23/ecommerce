import React from 'react';
import './Widget.css';

function Widget({type, value}) {
  let data;
      

  switch(type){
    case "totalUser" : 
      data = {
        title: "Total users",
        isMoney: false,
        link: "See all users",
      }
      break;
    case "totalOrderThisMonth" : 
      data = {
        title: "Total orders this month",
        isMoney: false,
        link: "View all orders",
      }
      break;
    case "incomeThisMonth" : 
      data = {
        title: "Income this month",
        isMoney: true,
        link: "View net earning",
      }
      break;

  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"} {value}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>Right</div>
    </div>
  )
}

export default Widget