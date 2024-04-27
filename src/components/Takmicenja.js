import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

const Takmicenja = ()=>{
    return(
      <div className='takmicenja'>
        <div className='carts' style={{backgroundColor:'rgb(123, 15, 15)'}}>
 
 <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='../images/biologija_takmicenje.jpg' fluid alt='...' className='slikaVesti'/>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Општинско такмичење из биологије</MDBCardTitle>
        <MDBCardText>
        18.03.2024
        </MDBCardText>
        <MDBBtn href='/opstinskoBiologija'>Прикажи више...</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
        </div>
    )
}

export default Takmicenja;