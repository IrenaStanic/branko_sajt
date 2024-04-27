import GodisnjiPlanRada from "../dokumenta/GodisnjiPlanRada.pdf";
import SkolskiProgram from "../dokumenta/SkolskiProgram.pdf";
import SkolskiRazvojniPlan from "../dokumenta/SkolskiRazvojniPlan.pdf";
import StatutSkole from '../dokumenta/StatutSkole.pdf';
import Etos23_24 from '../dokumenta/Etos23_24.pdf';
import Podrska23_24 from '../dokumenta/Podrska23_24.pdf';
import KodeksOblacenja from '../dokumenta/KodeksOblacenja.pdf';
import PravilnikMobilniTelefon from '../dokumenta/PravilnikMobilniTelefon.pdf';

const Dokumenta = ()=>{
    return(
        <div className="kontejnerDokumenata1">

        <div className="dokumenti">
            <span>Правилник о употреби мобилних телефона у школи</span>

        <a
        href={PravilnikMobilniTelefon}
        download="PravilnikMobilniTelefon"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Кодекс облачења</span>

        <a
        href={KodeksOblacenja}
        download="KodeksOblacenja"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Статут школе</span>

        <a
        href={StatutSkole}
        download="StatutSkole"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Школски развојни план</span>

        <a
        href={SkolskiRazvojniPlan}
        download="SkolskiRazvojniPlan"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Годишњи план рада 2023-2024</span>

        <a
        href={GodisnjiPlanRada}
        download="GodisnjiPlanRada"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Школски програм 2022-2023 до 2026-2027</span>

        <a
        href={SkolskiProgram}
        download="SkolskiProgram"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Самовредновање рада школе - Етос 2023-2024</span>

        <a
        href={Etos23_24}
        download="Etos23_24"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        <div className="dokumenti">
            <span>Самовредновање рада школе - Подршка ученицима 2023-2024</span>

        <a
        href={Podrska23_24}
        download="Podrska23_24"
        target="_blank"
         rel="noreferrer"
        >
        <button>Преузмите датотеку</button>
        </a>
        </div>

        </div>
    )
}

export default Dokumenta;