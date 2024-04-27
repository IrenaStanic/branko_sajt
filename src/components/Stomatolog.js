import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


const Stomatolog = ()=>{
    return(
        <div className='kontejnerDokumenata1'>
            <div className='zubar'>
               <p>Радно време стоматолошке ординације је од 07 до 13 часова</p>
               <p>Др Недељка Галовић</p>
               <p>Стоматолошка сестра Биљана Комарица</p>
            </div>

        <MDBRow className='slikeZubar'>
        <MDBCol className='col-md-4'>
         <img src='../images/zubar1.jpg' alt='biblioteka' style={{marginLeft: '15rem', marginTop:'2rem'}}/>
        </MDBCol>
        <MDBCol className='col-md-8 zubarSlika'>
        <img src='../images/zubar2.jpg' alt='biblioteka' style={{marginTop:'10rem'}}/>
        </MDBCol>
        </MDBRow>

        <div className='kontejner'>
        <div className='slikeZubarMiniVerzija'>
       
         <img src='../images/zubar1.jpg' alt='biblioteka'/>
       
        <img src='../images/zubar2.jpg' alt='biblioteka'/>
      
        </div>
        </div>

        </div>
    )
}

export default Stomatolog;