import React, {useEffect, useState} from 'react'
import Widget from './Widget';
import axios from '../axios';
import Loading from '../components/Loading';
import './MoreInformation.css';
import NewUsers from './NewUsers';
import OrdersStatusPie from './OrdersStatusPie';

function MoreInformation() {
  
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  //
  let userCount = 0;
  let ordersThisMonthCount = 0;
  let incomeThisMonth = 0;

  const currentDate = new Date();  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  //console.log("currentDate: " + currentDate);
  //console.log("currentMonth: " + currentMonth);
  //console.log("currentYear: " + currentYear);

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

  
  const calcUser = users.reduce((acc, item) => {
      //console.log("item.timeCreated: " + item.timeCreated);
      userCount = userCount + 1;
  }, {});

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

  
  const calcOrders = orders.reduce((acc, item) => {        
    const date = new Date(item.date);
    const orderMonth = date.getMonth();
    const orderYear = date.getFullYear();

    if(currentMonth == orderMonth && currentYear == orderYear){
      ordersThisMonthCount++;
      incomeThisMonth += item.total
      
      // let productsDetails = item.products.map((item) => {
      //   return item;
      // })

      //console.log("productsDetails: " + {...item.products[0]});
    }

  }, {});


  return (
    <div className='moreInformation'> 
      <div className='widget-container'>
        <Widget type="totalUser" value={userCount}/>
        <Widget type="totalOrderThisMonth" value={ordersThisMonthCount}/>
        <Widget type="incomeThisMonth" value={incomeThisMonth}/>
      </div >
      <NewUsers />
      <OrdersStatusPie />
    </div>
  )
}

export default MoreInformation