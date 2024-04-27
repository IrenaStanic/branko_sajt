import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = ()=>{
    return(
        <div>
             <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className=' p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
     {new Date().getFullYear()} Copyright:{' '}
        <p className='text-dark'>
           Основна школа "Бранко Радичевић" - Прибој - All Rights Reserved
        </p>
      </div>
    </MDBFooter>
        </div>
    )
}

export default Footer;