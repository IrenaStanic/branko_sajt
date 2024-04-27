import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const RazrednaNastava = ()=>{
    return(
        <div className='kontejnerDokumenata1'>
        <div className='tabela'>
            <h5 style={{padding:'0.5rem 1rem'}}>Запослени у разредној настави:</h5>
    <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Први разред</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Дрчелић Данијела</td>
      </tr>
      <tr>
        <td>Станковић Данијела</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Други разред</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Бошковић Јелена</td>
      </tr>
      <tr>
        <td>Бекоња Ивана</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Трећи разред</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Шиљак Стоја</td>
      </tr>
      <tr>
        <td>Ћирковић Весна</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Четврти разред</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Јановић Сандра</td>
      </tr>
      <tr>
        <td>Душица Ћирковић</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <MDBTable>
    <MDBTableHead dark>
      <tr>
        <th scope='col'>Продужени боравак</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td>Матијевић Ана</td>
      </tr>
      
    </MDBTableBody>
  </MDBTable>
  </div>
  </div>
    )
}

export default RazrednaNastava;