import React,{useState} from 'react';
//import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import{
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
}
from 'mdb-react-ui-kit';


function Signup(){
  const navigate = useNavigate();
  const [user,setUser] =useState({
    Name:"", CompanyName:"",Email:"",Address:"",MobileNo:"",password:"",status:"",role:""
  });
   let name,value;
  const handleInputs = (e) => {
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value});

  }
  const PostData = async (e) => {
    e.preventDefault();
    const{ Name, CompanyName,Email,Address,MobileNo,password,status,role}= user;
    const res = await fetch("http://localhost:5000/user/signup", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        Name, CompanyName,Email,Address,MobileNo,password,status,role
      })
      });
       const data =await res.json();

       if (data.status === 409 || !data ){
       window.alert("Invalid Registration");
       console.log("Invalid Registration");
       } else{
        window.alert("Registration Successful");
        console.log("Successful Registration");
        navigate("/signin");
       }


    }
  return(
<form method="POST">
<label htmlFor="name">
             
             </label>
             <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
  

    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
      The best offer <br />
      <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
      
</p>

  </MDBCol>

  <MDBCol md='6' className='position-relative'>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass'>
      <MDBCardBody className='p-5'>

    

             <MDBRow>
                <MDBCol col='6'>
              
                  <MDBInput wrapperClass='mb-4' name='Name' id='form1' type='text'
                  value={user.Name}
                  onChange={handleInputs}
                  placeholder='YOUR NAME'
                  
                  />
                
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' name='CompanyName' id='form2' type='text'
                   value={user.CompanyName}
                   onChange={handleInputs}
                   placeholder='COMPANY NAME'
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' name='Email' id='form3' type='email'
               value={user.Email}
               onChange={handleInputs}
               placeholder='EMAIL'
              />
           

             
              <MDBInput wrapperClass='mb-4' name='Address' id='form4' type='text'
               value={user.Address}
               onChange={handleInputs}
               placeholder='ADDRESS'
              />
              <MDBInput wrapperClass='mb-4' name='MobileNo' id='form5' type='number'
               value={user.MobileNo}
               onChange={handleInputs}
               placeholder='MOBILENO'
              />
              <MDBInput wrapperClass='mb-4' name='password' id='form6' type='password'
               value={user.password}
               onChange={handleInputs}
               placeholder='PASSWORD'
              />
               
                  <MDBInput wrapperClass='mb-4' name='status' id='form7' type='text'
               value={user.status}
               onChange={handleInputs}
               placeholder='STATUS'
              />
              <MDBInput wrapperClass='mb-4' name='role' id='form7' type='text'
               value={user.role}
               onChange={handleInputs}
               placeholder='ROLE'
              />
               <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

<MDBRow className='mb-4'>
  <MDBCol className='d-flex justify-content-center'>
    <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
  </MDBCol>
  <MDBCol>
    <a href='#!'>Forgot password?</a>
    </MDBCol>
</MDBRow>
<div class="text-center">
<MDBBtn className='mb-4' color ='dark'size='lg' type='submit' onClick={PostData}>
  SignUp
  
</MDBBtn>
</div>


</MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
</form>
  )
}

export default Signup;



