import PoslovnikParlamenta from '../dokumenta/PoslovnikParlamenta.pdf'; 
import AktivnostiParlament from '../dokumenta/AktivnostiParlament.pdf';
import UcenickiParlament from '../dokumenta/UcenickiParlament.pdf';

const DjackiParlament = ()=>{
    return(
        <div>
  <div className="kontejner">
        <div className='kontejnerDokumenata1'>
         <div className="dokumenti">
            <span>Пословник о раду Ученичког парламента</span>

        <a
        href={PoslovnikParlamenta}
        download="PoslovnikParlamenta"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Календар обележавања значајних датума и активности Ученичког парламента 2023-2024</span>

        <a
        href={AktivnostiParlament}
        download="AktivnostiParlament"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Програм рада Ученичког парламента 2023-2024</span>

        <a
        href={UcenickiParlament}
        download="UcenickiParlament"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        </div>

        <div className='kalendar'>
           <img src='../images/clanoviParlamenta.jpg' className='img-fluid shadow-4' alt='Школски календар 2023/2024 године'  />
        </div>
        </div>
        </div>
    )
}

export default DjackiParlament;