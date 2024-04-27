import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Uprava = ()=>{
    return(
        <div className='kontejnerDokumenata1'>
        <div className='tabela'>
            <h5 style={{padding:'0.5rem 1rem'}}>Управа школе:</h5>
    <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Директор </th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Танасковић Зоран</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Секретар</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Јечменица Бранислав</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Педагог</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Пријовић Светлана</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  </div>
  </div>
    )
}

export default Uprava;