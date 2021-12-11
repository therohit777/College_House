import React from 'react';
import "../Components/css/login.css";
import { Link } from 'react-router-dom';
import { useState , useRef } from 'react';
import validator from 'validator';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    
    const logmail = useRef('');
    const logpass = useRef('');

    const [loger, setloger] = useState('');
    const navigate = useNavigate();





    const logaction=(a,b)=>{
        if(a.current.value ==="" || b.current.value===""){
           setloger("All fields are mandatory.")
        }
        else if(!validator.isEmail(a.current.value)){
            setloger("please enter a valid email.");
        }
        else if(b.current.value.length < 8){
            setloger("password is less than 8 characters.")
        }
        else{
            auth.signInWithEmailAndPassword(
                a.current.value,
                b.current.value
            ).then(user=>{
                navigate('/home');
                console.log(user)
            })
            .catch(err=>{
                console.log(err);
                setloger("Invalid User")
            })
            setloger('');
            a.current.value='';
            b.current.value='';
        }
    }





    return (
        <div className="loginpage">
        <div className="login">
                <div className="loginpass">
                    <div className="logotxt">Login</div>
                    <div className="logotxt2">Please fill your basic info</div>
                    <input type="email" className="inputbox1" placeholder="user_email" ref={logmail}/>
                    <input type="password" className="inputbox2" placeholder={`password`} ref={logpass}/>
                    <p className="logerr">{loger}</p>
                    <div className="cont">
                    <Link to="/" className="logbtnlink"><button className="loginbtn" onClick={()=>logaction(logmail,logpass)}>Login</button></Link>
                    <Link to="/forgetpass" className="forpass">Forgot password?</Link>
                    </div>
                </div>
                <div className="register">
                    <p className="registertxt1" >Sign up Now</p>
                    <p className="registertxt2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi illo quae animi molestias doloremque cupiditate.</p>
                    <Link to="/signup" className="registerbtnlink"><button className="registerbtn">Register Now</button></Link>
                </div>
        </div>
        </div>
    )
}
