import React from 'react';
import "../Components/css/logout.css";
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

    const navigate = useNavigate();

    const logoutaction =()=>{
         auth.signOut()
         .then(()=>  navigate('/'))
         .catch(()=>console.log("logout error"))
    }

    return (
        <div className="logoutpage">
            <div className="logout">
                <p className="logouttxt1">Are you sure you want to Logout?</p>
                <button className="logoutbtn" onClick={()=>logoutaction()}>Logout</button>
            </div>
        </div>
    )
}
