import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { log } from 'console';
import ListUsers from './ListUsers';

function AllUsers({id, name, key}) {

    const [users, setUsers] = useState('');

    useEffect(() => {
        console.log(id)
        fetchUsers();
    }, [])

    const fetchUsers = () => {
            axios.get('http://localhost:4000/users/'+id)
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
