import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const Pazljivko= ()=>{
    return(
        <div className='kontejner'>
          <div className='textSlida'>
          <p>Одржано је школско такмичење "Пажљивкова смотра" за ученике првог и другог разреда.</p>
          </div>
        <div className='kontejnerSlida'>
             <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='../images_vesti/pazljivko1.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <p>Одржано је школско такмичење "Пажљивкова смотра" за ученике првог и другог разреда.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='../images_vesti/pazljivko2.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
        <p>Одржано је школско такмичење "Пажљивкова смотра" за ученике првог и другог разреда.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='../images_vesti/pazljivko3.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
        <p>Одржано је школско такмичење "Пажљивкова смотра" за ученике првог и другог разреда.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src='../images_vesti/pazljivko4.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
        <p>Одржано је школско такмичење "Пажљивкова смотра" за ученике првог и другог разреда.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

    </MDBCarousel>
        </div>
        </div>
    )
}

export default Pazljivko;