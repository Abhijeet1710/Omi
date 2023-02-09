import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { log } from 'console';
import ListUsers from './ListUsers';

function AllUsers(props) {

    const [users, setUsers] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
            axios.get('http://localhost:4000/users/')
                .then(function (response: any) {
                    console.log(response.data)
                    setUsers(response.data)
                })
                .catch(function (error) {
                    console.log("Error : " + error);
                });
        }

    return (
        <>
           <ListUsers users = {users}/>
        </>
    );
}

export default AllUsers;
