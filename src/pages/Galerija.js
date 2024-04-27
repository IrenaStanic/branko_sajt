import React from 'react';
import { MDBRow, MDBCol, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';


const Galerija = ()=>{
    return(
        <div className='kontejnerDokumenata' >
             <MDBRow className='slikeBiblioteka' style={{marginTop:'2rem'}}>
        <MDBCol className='col-md-4'>
         <img src='../images/skola1.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola2.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/bi.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola3.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola4.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola5.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola6.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola7.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola8.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola9.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola10.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/skola11.jpg' alt='biblioteka'/>
        </MDBCol>
      </MDBRow>

      <div className='kontejner'>
        <div className='kontejnerSlidaMiniVerzija'>
             <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='../images/skola1.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='../images/skola2.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='../images/skola3.jpg' className='d-block w-100' alt='maraton' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src='../images/skola4.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src='../images/skola5.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={6}>
        <img src='../images/skola6.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={7}>
        <img src='../images/skola8.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={8}>
        <img src='../images/skola9.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={9}>
        <img src='../images/skola10.jpg' className='d-block w-100' alt='...' style={{maxHeight:'20rem'}} />
      </MDBCarouselItem>

    </MDBCarousel>
        </div>
        </div>

        </div>
    )
}

export default Galerija;