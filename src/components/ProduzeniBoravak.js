import React from 'react';
import { MDBRow, MDBCol, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';


const ProduzeniBoravak = ()=>{
    return(
        <div className='kontejnerDokumenata'>
            <div className='zubar'>
               <p>Радно време је од 11:35 до 16:00 часова</p>
               <p>-учитељица Ана Матијевић-</p>
             
            </div>

        <MDBRow className='slikeZubar'>
        <MDBCol className='col-md-4'>
         <img src='../images/produzeni1.jpg' alt='biblioteka' />
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/produzeni2.jpg' alt='biblioteka' style={{width:'100%', marginLeft:'1rem'}}/>
        </MDBCol>
        <MDBCol className='col-md-4'>
         <img src='../images/produzeni4.jpg' alt='biblioteka' />
        </MDBCol>
        <MDBCol className='col-md-6'>
        <img src='../images/produzeni3.jpg' alt='biblioteka' />
        </MDBCol>
        <MDBCol className='col-md-6'>
        <img src='../images/produzeni5.jpg' alt='biblioteka' />
        </MDBCol>
      </MDBRow>

      <div className='kontejner'>
        <div className='kontejnerSlidaMiniVerzija'>
             <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='../images/produzeni1.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='../images/produzeni3.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='../images/produzeni4.jpg' className='d-block w-100' alt='maraton' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src='../images/produzeni5.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

    </MDBCarousel>
        </div>
        </div>

        </div>
    )
}

export default ProduzeniBoravak;