import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/css/forgetpass.css";
import  { useRef,useState } from 'react';
import validator from 'validator';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';



export const Forgetpass = () => {
    
    const formail = useRef('');
    const [forerr, setforerr] = useState('');
    const navigate = useNavigate();

    const foraction=(a)=>{
        if(!validator.isEmail(a.current.value)){
            setforerr("please enter a valid email.");
        }
        else{
            auth.sendPasswordResetEmail(
                a.current.value
            )
            .then(()=>{
                navigate('/emailsent');
            })
            .catch(()=> setforerr("Please enter your registered email."))

            setforerr("");            
        }
    }
    return (
        <div>
            <div className="forgetpage">
               <div className="forgetcont">
                    <div className="forcont1">
                    <h1 className="fortxt1">Forget password</h1>
                    <p className="fortxt2">Don't worry.Resetting your password is easy , just tell us the email address you registered with College House.</p>
                    <input type="email" className="forinput" placeholder="Email Addres" ref={formail}/>
                    <p className="forerr">{forerr}</p>
                    </div>
                    <div className="forcont2">
                        <Link to="/"><button className="forbtn1">Back</button></Link>
                        <button className="forbtn" onClick={()=>foraction(formail)}>Send</button>
                    </div>
               </div>
            </div>      
        </div>
    )
}
