import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Kontakt =()=>{
    return(

        <Container className='kontejnerDokumenata1'>
        <Row style={{marginTop:'2rem', paddingBottom:'2rem'}}>
        <Col><div className='kontakt'>
        <span>Основна школа "Бранко Радичевић"</span>
        <p>Адреса: 12. јануар, Прибој</p>
        <p>Број телефона:
          <br></br> 033 / 2445 - 437</p>
        <p>Званична е-маил адреса школе: osbrpb@gmail.com</p>
        <p>Друштвене мреже:</p>
        <a href='https://www.facebook.com/p/%D0%9E%D0%A8-%D0%91%D1%80%D0%B0%D0%BD%D0%BA%D0%BE-%D0%A0%D0%B0%D0%B4%D0%B8%D1%87%D0%B5%D0%B2%D0%B8%D1%9B-%D0%9F%D1%80%D0%B8%D0%B1%D0%BE%D1%98-100057314625164/?locale=sr_RS'>Facebook</a>
        </div></Col>
          <Col className='googleMap'> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0964808929825!2d19.52149267669712!3d43.5837066711055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47581727fe49fe7b%3A0x7fc2db38c38a4209!2z0JHRgNCw0L3QutC-INCg0LDQtNC40YfQtdCy0LjRmw!5e0!3m2!1ssr!2srs!4v1709751189589!5m2!1ssr!2srs" 
        width="600" 
        height="450" 
        style={{marginLeft:'2rem'}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title='mapaSkole'></iframe></Col>
        </Row>
      </Container>






    )
}

export default Kontakt;