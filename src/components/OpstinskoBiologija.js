import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const OpstinskoBiologija= ()=>{
    return(
        <div>
            <MDBTable className='tabelaBiologija'>
      <MDBTableHead>
        <tr>
        <th scope='col' className='izbaci'>Разред</th>
          <th scope='col'>Име</th>
          <th scope='col'>Презиме</th>
          <th scope='col'>Број бодова</th>
          <th scope='col'>Пласман</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row' className='izbaci'>VI</th>
          <td>Зара</td>
          <td>Ченгић</td>
          <td>90</td>
          <td>II</td>
        </tr>
        <tr>
          <th scope='row' className='izbaci'>VI</th>
          <td>Дуња</td>
          <td>Томић</td>
          <td>86</td>
          <td>III</td>
        </tr>
        <tr>
          <th scope='row' className='izbaci'>VI</th>
          <td>Хана</td>
          <td>Ћеловић</td>
          <td>82</td>
          <td>III</td>
        </tr>
        <tr>
          <th scope='row' className='izbaci'>VIII</th>
          <td>Стеван</td>
          <td>Добрашиновић</td>
          <td>83</td>
          <td>III</td>
        </tr>
        <tr>
          <td colSpan={5}>Сви ученици наставнице Обућина Самире су остварили пласман на окружно такмичење.
                ЧЕСТИТАМО!</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
        </div>
       
    )
}

export default OpstinskoBiologija;