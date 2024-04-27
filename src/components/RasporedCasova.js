const RasporedCasova = ()=>{
    return(
            <div className="raspored">
        <div style={{marginBottom:'2rem'}}>
        <span>Распоред часова старијих разреда</span>
           <img src='../images/rasporedPredmetna.png' className='img-fluid shadow-4' alt='Школски календар 2023/2024 године' />
           </div>
          <div className="casovi">
           <span>Распоред часова нижих разреда</span>
           <img src='../images/rasporedRazredna.png' className='img-fluid shadow-4' alt='Школски календар 2023/2024 године'  />
        </div>
        </div>
        
    )
}

export default RasporedCasova;