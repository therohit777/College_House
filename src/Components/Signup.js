import React from 'react';
import "../Components/css/signup.css";
import { Link } from 'react-router-dom';
import  { useRef ,useState} from 'react';
import validator from 'validator';
import { auth } from './Firebase';


export const Signup = () => {

    const [mess, setmess] = useState('');
    const namess = useRef('');
    const mail = useRef('');
    const passs = useRef('');
    const confirmpasss = useRef('');


    const signupaction = (a,b,c,d)=>{
        if(a.current.value ==="" || b.current.value==="" ||c.current.value===""|| d.current.value===""){
           setmess("All fields are mandatory.")
        }
        else if(a.current.value.length<4){
            setmess("name is less than 4 characters.")
        }
        else if(!validator.isEmail(b.current.value)){
            setmess("please enter a valid email.")     
        }
        else if(c.current.value.length<8){
            setmess("password is less than 8 characters.")
        }
        else if(c.current.value!==d.current.value){
            setmess("password in both fields doesnot match.")
        }
        else{
            auth.createUserWithEmailAndPassword(
                b.current.value,
                c.current.value
            ).then(user =>{
                console.log(user)
            }).catch(err=>{
                console.log(err)
            })
            setmess("");
            a.current.value="";
            b.current.value="";
            c.current.value="";
            d.current.value="";
        }
    }

    return (
        <div className="signuppage">
            <div className="signup">
                <div className="sincont1">
                <h1 className="signtxt1">Signup</h1>
                <div className="signtxt2">Please fill your details</div>
                <input type="text" className="signinput" placeholder="Full Name" ref={namess}/>
                <input type="email" className="signinput" placeholder="Email" ref={mail}/>
                <input type="password" className="signinput" placeholder="Password" ref={passs}/>
                <input type="password" className="signinput" placeholder="Confirm Password" ref={confirmpasss}/>
                <p className="errmess">{mess}</p>
                </div>
                <div className="sincont2">
                <Link to=""><button className="signbtn" onClick={()=>signupaction(namess,mail,passs,confirmpasss)}>Signup</button></Link>
                <Link to="/" className="sinbacklin">back</Link>
                 </div>
            </div>
        </div>
    )
}
