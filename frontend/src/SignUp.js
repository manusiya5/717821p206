import React from "react";
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup ">
      <h1 className='text-dark p-3'>SignUp</h1>
       <h5>Enter your name:</h5>
       <input type='text' className="mb-3 ps-3"></input>
       <h5>Enter your email:</h5>
       <input type='email' className="mb-3 ps-3"></input>
       <h5>Enter your password:</h5>
       <input type='password' className="mb-3 ps-3"></input>
       <h5>Reenter your password:</h5>
       <input type='password' className="mb-3 ps-3"></input><br></br>
       <Link to='AllCompany'><button className="signupbutton mb-5">Submit</button></Link>
    </div>
  );
}

export default SignUp;
