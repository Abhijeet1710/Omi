import { useState } from "react";
import React from "react";
import axios from "axios";


function RegisterComponent() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = () => {
        axios.post('http://localhost:4000/users', {
            userName,
            password
        })
            .then(function (response: any) {
                console.log("Respone : " + JSON.stringify(response));
            })
            .catch(function (error) {
                console.log("Error : " + error);
            });
    }

    const handleUserNameChange = (event: React.ChangeEvent<any>) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<any>) => {
        setPassword(event.target.value);
    }


    return (
        <>
            <div className="App">
                User Name : <input id='userNameId' type="text" placeholder='User Name' value={userName} onChange={handleUserNameChange} /> <br></br>
                Password : <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} /> <br></br>
                <button onClick={submitForm}>Submit</button>
            </div>
        </>
    )
}

export default RegisterComponent;