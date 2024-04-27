import Letopis13_14 from "../dokumenta/Letopis13_14.pdf";
import Letopis14_15 from "../dokumenta/Letopis14_15.pdf";
import Letopis15_16 from "../dokumenta/Letopis15_16.pdf";
import Letopis16_17 from "../dokumenta/Letopis16_17.pdf";
import Letopis17_18 from "../dokumenta/Letopis17_18.pdf";
import Letopis18_19 from "../dokumenta/Letopis18_19.pdf";

const Letopisi = ()=>{
    return (
        <div className="kontejnerDokumenata1">

        <div className="dokumenti">
            <span>Летопис 2018/2019 године</span>

        <a
        href={Letopis18_19}
        download="Letopis18_19"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Летопис 2017/2018 године</span>

        <a
        href={Letopis17_18}
        download="Letopis17_18"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Летопис 2016/2017 године</span>

        <a
        href={Letopis16_17}
        download="Letopis16_17"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Летопис 2015/2016 године</span>

        <a
        href={Letopis15_16}
        download="Letopis15_16"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Летопис 2014/2015 године</span>

        <a
        href={Letopis14_15}
        download="Letopis14_15"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Летопис 2013/2014 године</span>

        <a
        href={Letopis13_14}
        download="Letopis13_14"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        </div>
    )
}

export default Letopisi;