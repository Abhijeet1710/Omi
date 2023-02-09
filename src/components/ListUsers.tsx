import { all } from 'axios';
import { log } from 'console';
import React, { useState } from 'react';

function ListUsers(props: any) {

    const displayUsers = (props) => {
        const allUsers = props.users;

        if(allUsers.length > 0) {
            return (
                allUsers.map((user: any, index : any) => {
                    console.log(user.userName);

                    return (
                        <div>
                            <span>{ user.id }</span>
                            <h3> { user.userName }</h3>
                        </div>
                    );
                })
            );
        } else {
            return (<h3>No Users</h3>)
        }
    }

    return (<>
        {displayUsers(props)}
    </>
    )
}

export default ListUsers;
