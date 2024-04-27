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

const Home =() =>{
return(
    <div className="container1">
        <div className="address">
            <div className="googleMaps">
                <p>Назив</p>
                <span className="fontHome">Основна школа </span>
                <p className="fontHome">"Бранко Радичевић"</p>
                <hr></hr>

                <p>Adresa</p>
                <span className="fontHome">улица "12.Јануар" бр.104</span>
                <hr></hr>

                <p>Место</p>
                <span className="fontHome">31330 Прибој</span>
                <hr></hr>

                <p>Општина</p>
                <span className="fontHome">Прибој</span>
                <hr></hr>

                <p>Република</p>
                <span className="fontHome">Србија</span>
                <hr></hr>

                <p>Број телефона/факса</p>
                <span className="fontHome">033 / 2445 - 437</span>
                <hr></hr>

                <p>е-маил</p>
                <span className="fontHome">osbrpb@gmail.com</span>
                <hr></hr>

                <p>Матични број</p>
                <span className="fontHome">07111452</span>
                <hr></hr>

                <p>Пиб</p>
                <span className="fontHome">101206261</span>
                <hr></hr>

                <p>Подаци о рачуну</p>
                <span className="fontHome">840-360660-86  </span>
                <p className="fontHome">средства буџета</p>
                <span className="fontHome">840-360666-68</span>
                <p className="fontHome">сопствени приходи</p>
                <span className="fontHome">840-360760-30</span>
                <p className="fontHome"> средства родитеља</p>
                
            </div>
            <div className="googleMaps">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0964808929825!2d19.52149267669712!3d43.5837066711055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47581727fe49fe7b%3A0x7fc2db38c38a4209!2z0JHRgNCw0L3QutC-INCg0LDQtNC40YfQtdCy0LjRmw!5e0!3m2!1ssr!2srs!4v1709404084166!5m2!1ssr!2srs" 
                    width="200" 
                    height="300"
                    style={{border:"0", marginTop:"210px"}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="googleMaps"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
            </div>
        </div>
        <div className="aktivnosti">

        <MDBCard className='cartica'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='../images_vesti/danPlanete/slika1.jpg' fluid alt='...' className='slikaVesti'/>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Дан планете Земље</MDBCardTitle>
        <MDBCardText>
        22.04.2024
        </MDBCardText>
        <MDBBtn href='/danPlanete'>Прикажи више...</MDBBtn>
      </MDBCardBody>
    </MDBCard>
       
        <MDBCard className='cartica'>
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

        <MDBCard className='cartica'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='../images_vesti/projekatBiologija/ptice5.jpg' fluid alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Птице мога краја</MDBCardTitle>
        <MDBCardText>
        14.03.2024
        </MDBCardText>
        <MDBBtn href='/projekatBiologija'>Прикажи више...</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='cartica'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='../images_vesti/pazljivko.jpg' fluid alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Пажљивкова смотра</MDBCardTitle>
        <MDBCardText>
        14.03.2024
        </MDBCardText>
        <MDBBtn href='/pazljivko'>Прикажи више...</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='cartica'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='../images_vesti/brPi8.jpg' fluid alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Дан броја Pi и рођендан Мике Антића</MDBCardTitle>
        <MDBCardText>
        14.03.2024
        </MDBCardText>
        <MDBBtn href='/brPi'>Прикажи више...</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='cartica'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='../images/maraton4.jpg' fluid alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Читалачки маратон</MDBCardTitle>
        <MDBCardText>
        11.03.2024
        </MDBCardText>
        <MDBBtn href='/maraton'>Прикажи више...</MDBBtn>
      </MDBCardBody>
    </MDBCard>

        </div>
    </div>
)
}

export default Home;