import GodisnjiBiblioteka from '../dokumenta/GodisnjiBiblioteka.pdf';
import React from 'react';
import { MDBRow, MDBCol, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import IzvestajBiblioteka from '../dokumenta/IzvestajBiblioteka.pdf';

const Biblioteka = ()=>{
    return(
        <div className='kontejnerDokumenata'>
        
            <div className="dokumenti">
            <span>Годишњи програм рада Библиотеке</span>

        <a
        href={GodisnjiBiblioteka}
        download="GodisnjiBiblioteka"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>
      
        <div className="dokumenti">
            <span>Извештај о раду Библиотеке</span>

        <a
        href={IzvestajBiblioteka}
        download="IzvestajBiblioteka"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        

        
      <MDBRow className='slikeBiblioteka'>
        <MDBCol className='col-md-4'>
         <img src='../images/biblioteka4.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/biblioteka2.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/bi.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/biblioteka1.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/biblioteka5.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/biblioteka6.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/biblioteka7.jpg' alt='biblioteka'/>
        </MDBCol>
        <MDBCol className='col-md-4'>
        <img src='../images/biblioteka3.jpg' alt='biblioteka'/>
        </MDBCol>
      </MDBRow>
    
      <div className='kontejner'>
        <div className='kontejnerSlidaMiniVerzija'>
             <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='../images/biblioteka1.jpg' className='d-block w-100' alt='maraton' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='../images/biblioteka5.jpg' className='d-block w-100' alt='maraton' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='../images/biblioteka6.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src='../images/biblioteka7.jpg' className='d-block w-100' alt='maraton' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src='../images/biblioteka3.jpg' className='d-block w-100' alt='maraton' />
      </MDBCarouselItem>

    </MDBCarousel>
        </div>
        </div>

        </div>
    )
}

export default Biblioteka;