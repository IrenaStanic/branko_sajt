import PravilnikNasilje24 from '../dokumenta/PravilnikNasilje24.pdf';
import PostupanjeKrizneSituacije from '../dokumenta/PostupanjeKrizneSituacije.pdf';

const DopisiMinistarstva = ()=>{
    return(
        <div className='kontejnerDokumenata1'>

        

        <div className="dokumenti">
            <span>Правилник о протоколу за насиље</span>

        <a
        href={PravilnikNasilje24}
        download="PravilnikNasilje24"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Поступање у кризним ситуацијама</span>

        <a
        href={PostupanjeKrizneSituacije}
        download="PostupanjeKrizneSituacije"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        </div>
    )
}

export default DopisiMinistarstva;