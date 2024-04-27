import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/reducer/openSlice";
import React from 'react';

function Header() {
    const dispatch = useDispatch();
    const handleOpenMeni = (open) =>{
      dispatch(toggleCart(open))
    }

  return (
    <div>
    <Navbar expand="lg" className=''>
      <Container>
        <Navbar.Brand href="/">
        <img src='./images/logo.jfif'  alt='logo'  />
        </Navbar.Brand>
        <Nav.Link className='textHover'>Школа са душом</Nav.Link>
    
        <Navbar.Toggle  aria-controls="basic-navbar-nav" className='navbar'/>
       
    <span className="fa fa-caret-down" id='meni' style={{marginLeft:'-2.3rem', fontSize:'larger'}}>&#9776;</span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Почетна</Nav.Link>
           
            <NavDropdown title="О школи" id="basic-nav-dropdown">
              <NavDropdown.Item href="/istorija" onClick={()=>handleOpenMeni(false)}>Историјат</NavDropdown.Item>
              <NavDropdown.Item href="/skolskiOdbor" onClick={()=>handleOpenMeni(false)}>
              Школски одбор
              </NavDropdown.Item>
              <NavDropdown.Item href="/biblioteka" onClick={()=>handleOpenMeni(false)}>Библиотека</NavDropdown.Item>
              <NavDropdown.Item href="/stomatolog" onClick={()=>handleOpenMeni(false)}>Стоматолошка ординација</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Актуелно" id="basic-nav-dropdown">
              <NavDropdown.Item href="/kalendar" onClick={()=>handleOpenMeni(false)}>Школски календар</NavDropdown.Item>
              <NavDropdown.Item href="/rasporedZvona" onClick={()=>handleOpenMeni(false)}>
              Распоред звона
              </NavDropdown.Item>
              <NavDropdown.Item href="/otvorenaVrata" onClick={()=>handleOpenMeni(false)}>Дан отворених врата</NavDropdown.Item>
              <NavDropdown.Item href="/dopisiMinistarstva" onClick={()=>handleOpenMeni(false)}>Дописи министарства</NavDropdown.Item>
              <NavDropdown.Item href="/letopisi" onClick={()=>handleOpenMeni(false)}>Летописи</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Настава" id="basic-nav-dropdown">

            <NavDropdown title="Запослени" id="basic-nav-dropdown">
              <NavDropdown.Item href="/uprava" onClick={()=>handleOpenMeni(false)}>Управа школе</NavDropdown.Item>
              <NavDropdown.Item href="/predmetnaNastava" onClick={()=>handleOpenMeni(false)}>Предметна настава</NavDropdown.Item>
              <NavDropdown.Item href="/razrednaNastava" onClick={()=>handleOpenMeni(false)}>Разредна настава</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Распоред додатне, допунске наставе и секције" id="basic-nav-dropdown">
              <NavDropdown.Item href="/rasporedPredmetna" onClick={()=>handleOpenMeni(false)}>Распоред додатне, допунске наставе - предметна настава</NavDropdown.Item>
              <NavDropdown.Item href="/rasporedRazredna" onClick={()=>handleOpenMeni(false)}>Распоред додатне, допунске наставе - разредна настава</NavDropdown.Item>
            </NavDropdown>

              <NavDropdown.Item href="/rasporedCasova" onClick={()=>handleOpenMeni(false)}>Распоред часова</NavDropdown.Item>
              <NavDropdown.Item href="/rasporedPismenih" onClick={()=>handleOpenMeni(false)}> Распоред контролних вежби и писмених задатака
              </NavDropdown.Item>
              <NavDropdown.Item href="/projekti" onClick={()=>handleOpenMeni(false)}>Пројекти</NavDropdown.Item>
              <NavDropdown.Item href="/timovi" onClick={()=>handleOpenMeni(false)}>Тимови</NavDropdown.Item>
              <NavDropdown.Item href="/produzeniBoravak" onClick={()=>handleOpenMeni(false)}>Продужени боравак</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ученици" id="basic-nav-dropdown">
              <NavDropdown.Item href="/takmicenja" onClick={()=>handleOpenMeni(false)}>Такмичења </NavDropdown.Item>
              <NavDropdown.Item href="/djackiParlament" onClick={()=>handleOpenMeni(false)}>
              Ђачки парламент
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/dokumenta" onClick={()=>handleOpenMeni(false)}>Документа</Nav.Link>
            <Nav.Link href="/galerija" onClick={()=>handleOpenMeni(false)}>Галерија</Nav.Link>
            <Nav.Link href="/kontakt" onClick={()=>handleOpenMeni(false)}>Контакт</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('./images/naslovna.jpg')", height: '400px' }}
      >
        <div>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <br></br>
              <br></br>
            <h4 className='mb-5'style={{fontWeight:'bolder', textShadow: '2px 2px darkblue'}}>Основна школа</h4>
              <h1 className='mb-4' style={{fontStyle:'italic', fontWeight:'bolder',   textShadow: '2px 2px darkblue'}}>"Бранко Радичевић"</h1>
              
            </div>
          </div>
        </div>
        
      </div>
      <div className="textHover">
          <h3>Најстарија школа у граду, основана 1888. године. </h3>
        </div>
    </div>
  );
}

export default Header;