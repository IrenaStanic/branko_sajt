import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const DanPlanete = ()=>{
    return(
        <div className='kontejner'>
          <div className='textSlida'>
          <p>У продуженом боравку, наши ученици су, уз помоћ учитељице Ане Мијатовић, обележили Дан планете Земље кроз игру и дружење, уз разноврсни програм.</p>
          </div>
        <div className='kontejnerSlida'>
             <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='../images_vesti/danPlanete/slika1.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <p>У продуженом боравку, наши ученици су, уз помоћ учитељице Ане Мијатовић, обележили Дан планете Земље кроз игру и дружење, уз разноврсни програм.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='../images_vesti/danPlanete/slika2.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
          <p>У продуженом боравку, наши ученици су, уз помоћ учитељице Ане Мијатовић, обележили Дан планете Земље кроз игру и дружење, уз разноврсни програм.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='../images_vesti/danPlanete/slika3.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
          <p>У продуженом боравку, наши ученици су, уз помоћ учитељице Ане Мијатовић, обележили Дан планете Земље кроз игру и дружење, уз разноврсни програм.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src='../images_vesti/danPlanete/slika4.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
        <p>У продуженом боравку, наши ученици су, уз помоћ учитељице Ане Мијатовић, обележили Дан планете Земље кроз игру и дружење, уз разноврсни програм.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src='../images_vesti/danPlanete/slika5.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
        <p>У продуженом боравку, наши ученици су, уз помоћ учитељице Ане Мијатовић, обележили Дан планете Земље кроз игру и дружење, уз разноврсни програм.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={6}>
        <img src='../images_vesti/danPlanete/slika6.jpg' className='d-block w-100' alt='maraton' />
        <MDBCarouselCaption>
        <p>У продуженом боравку, наши ученици су, уз помоћ учитељице Ане Мијатовић, обележили Дан планете Земље кроз игру и дружење, уз разноврсни програм.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

    </MDBCarousel>
        </div>
        </div>
    )
}

export default DanPlanete;