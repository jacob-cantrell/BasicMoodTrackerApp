import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const LoginPage = () => {
    return (
<MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://images.squarespace-cdn.com/content/v1/60818be3726c6c6c3f24a841/1622140128102-KWTH9R30PZ4DOZ9UN9KB/Mental+Health.png?format=1000w" class="img-fluid" alt="Sample" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLgEm' type='email' size="lg"/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLgPw' type='password' size="lg"/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <Link className="" to="/home">Login</Link>
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
    </div>

  </MDBCol>

</MDBRow>
</MDBContainer>
    );
};

export default LoginPage;