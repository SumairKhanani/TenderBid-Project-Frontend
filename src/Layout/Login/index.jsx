import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import{
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import Signup from '../Signup';

function Login() {
  const navigate = useNavigate();
  const [Email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const PostData = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/user/login", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        Email,
        password
      })
      });
       const data =await res.json();

       if (data.status === 401 || !data ){
       window.alert("LOGIN FAILED");
       console.log("Invalid LOGIN");
       } else{
        window.alert("LOGIN Successful");
        console.log("Successful LOGIN");
        navigate("/");
       }
      }


  return (
    <form method="POST">
  <label htmlFor="name">
             
             </label>
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://collegemarker.com/images/signin.png' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' name='Email address' id='formControlLg' type='Email' size="lg"
                 value={Email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder=' YOUR EMAIL'
                
                />
                <MDBInput wrapperClass='mb-4' name='Password' id='formControlLg' type='password' size="lg"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder='YOUR PASSWORD'
                
                />

              <MDBBtn className="mb-4 px-5" type='submit' color='dark' size='lg' onClick={PostData}>Login</MDBBtn>
             
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/register" style={{color: '#393f81'}}>
                <Button onClick={()=>Signup()}>Register</Button></a></p>
              


              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </form>
  );
}

export default Login;