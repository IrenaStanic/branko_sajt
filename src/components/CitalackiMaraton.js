import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const CitalackiMaraton= ()=>{
    return(
        <div className='kontejner'>
            <div className='textSlida'>
          <p>Занимљиве, едукативне и креативне радионице 
        намењене су ученицима од 5-8. разреда који воле лепу писану реч. Координаторке "Читалачког маратона" издавачке куће Клет
         су наставнице српског језика Драгана Новковић и Комарица Биљана.</p>
          </div>
        <div className='kontejnerSlida'>
             <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='../images/maraton1.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <p>Занимљиве, едукативне и креативне радионице 
        намењене су ученицима од 5-8. разреда који воле лепу писану реч. Координаторке "Читалачког маратона" издавачке куће Клет
         су наставнице српског језика Драгана Новковић и Комарица Биљана.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='../images/maraton2.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
          <p>Занимљиве, едукативне и креативне радионице 
        намењене су ученицима од 5-8. разреда који воле лепу писану реч. Координаторке "Читалачког маратона" издавачке куће Клет
         су наставнице српског језика Драгана Новковић и Комарица Биљана.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='../images/maraton3.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
          <p>Занимљиве, едукативне и креативне радионице 
        намењене су ученицима од 5-8. разреда који воле лепу писану реч. Координаторке "Читалачког маратона" издавачке куће Клет
         су наставнице српског језика Драгана Новковић и Комарица Биљана.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src='../images/maraton4.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
          <p>Занимљиве, едукативне и креативне радионице 
        намењене су ученицима од 5-8. разреда који воле лепу писану реч. Координаторке "Читалачког маратона" издавачке куће Клет
         су наставнице српског језика Драгана Новковић и Комарица Биљана.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src='../images/maraton5.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
          <p>Занимљиве, едукативне и креативне радионице 
        намењене су ученицима од 5-8. разреда који воле лепу писану реч. Координаторке "Читалачког маратона" издавачке куће Клет
         су наставнице српског језика Драгана Новковић и Комарица Биљана.</p>
        </MDBCarouselCaption>

      </MDBCarouselItem>

    </MDBCarousel>
        </div>
        </div>
    )
}

export default CitalackiMaraton;