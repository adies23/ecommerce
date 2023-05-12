import axios from '../axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Loading from '../components/Loading';
import Moment from 'moment';

function ClientAdminPage() {

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

    if(loading) {
        return <Loading />;
    }

    if(users?.length == 0) {
        return <h2 className="py-2 text-center">No users yet</h2>;
    }

  return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Client Id</th>
                    <th>Client Name</th>
                    <th>Email</th>
                    <th>Time Created</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{Moment(user.timeCreated).format('yyyy/MM/DD hh:mm:ss')}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
  )
}

export default ClientAdminPage