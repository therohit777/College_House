import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/css/emailsent.css";

export const Emailsent = () => {
    return (
        <div className="sentemailpage">
            <div className="sentcont">
                <h1 className="senttxt1">Reset Password</h1>
                <p className="senttxt2">We have sent a reset password email to this mail Id. Please click the reset password link to set your new password.</p>
                <p className="senttxt3">Didn't recieve the email yet?</p>
                <p className="senttxt4">Please check your spam folder, or <Link to="/forgetpass" className="senttxt4lin">resend</Link> the email.</p>
                <div className="btnlin">
                    <Link to="/" className="btnlink"><button className="sentbtn">Return to Login</button></Link>
                </div>
            </div>
        </div>
    )
}
