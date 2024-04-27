import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Kalendar from './components/Kalendar';
import Footer from './components/Footer';
import RasporedCasova from './components/RasporedCasova';
import Biblioteka from './components/Biblioteka';
import Stomatolog from './components/Stomatolog';
import DopisiMinistarstva from './components/DopisiMinistarstva';
import OtvorenaVrata from './components/OtvorenaVrata';
import RasporedZvona from './components/RasporedZvona';
import Dokumenta from './pages/Dokumenta';
import Galerija from './pages/Galerija';
import Kontakt from './pages/Kontakt';
import Takmicenja from './components/Takmicenja';
import DjackiParlament from './components/DjackiParlament';
import Uprava from './components/Uprava';
import PredmetnaNastava from './components/PredmetnaNastava';
import RazrednaNastava from './components/RazrednaNastava';
import SkolskiOdbor from './components/SkolskiOdbor';
import RasporedPredmetna from './components/RasporedPredmetna';
import RasporedRazredna from './components/RasporedRazredna';
import RasporedPismenih from './components/RasporedPismenih';
import Timovi from './components/Timovi';
import ProduzeniBoravak from './components/ProduzeniBoravak';
import Projekti from './components/Projekti';
import Istorija from './components/Istorija';
import CitalackiMaraton from './components/CitalackiMaraton';
import Letopisi from './components/Letopisi';
import DanPi from './components/DanPi';
import Pazljivko from './components/Pazljivko';
import OpstinskoBiologija from './components/OpstinskoBiologija';
import PticeMogaKraja from './components/PticeMogaKraja';
import DanPlanete from './components/danPlanete';
function App() {
  return (
    
   <BrowserRouter>
  <Header></Header>
   <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/uprava' element={<Uprava></Uprava>}></Route>
   <Route path='/istorija' element={<Istorija></Istorija>}></Route>
   <Route path='/letopisi' element={<Letopisi></Letopisi>}></Route>
   <Route path='/timovi' element={<Timovi></Timovi>}></Route>
   <Route path='/produzeniBoravak' element={<ProduzeniBoravak></ProduzeniBoravak>}></Route>
   <Route path='/rasporedPismenih' element={<RasporedPismenih></RasporedPismenih>}></Route>
   <Route path='/rasporedPredmetna' element={<RasporedPredmetna></RasporedPredmetna>}></Route>
   <Route path='/rasporedRazredna' element={<RasporedRazredna></RasporedRazredna>}></Route>
   <Route path='/predmetnaNastava' element={<PredmetnaNastava></PredmetnaNastava>}></Route>
   <Route path='/razrednaNastava' element={<RazrednaNastava></RazrednaNastava>}></Route>
   <Route path='/djackiParlament' element={<DjackiParlament></DjackiParlament>}></Route>
   <Route path='/takmicenja' element={<Takmicenja></Takmicenja>}></Route>
   <Route path='/kontakt' element={<Kontakt></Kontakt>}></Route>
   <Route path='/galerija' element={<Galerija></Galerija>}></Route>
   <Route path='/kalendar' element={<Kalendar></Kalendar>}></Route>
   <Route path='/dokumenta' element={<Dokumenta></Dokumenta>}></Route>
   <Route path='/biblioteka' element={<Biblioteka></Biblioteka>}></Route>
   <Route path='/brPi' element={<DanPi></DanPi>}></Route>
   <Route path='/danPlanete' element={<DanPlanete></DanPlanete>}></Route>
   <Route path='/opstinskoBiologija' element={<OpstinskoBiologija></OpstinskoBiologija>}></Route>
   <Route path='/projekatBiologija' element={<PticeMogaKraja></PticeMogaKraja>}></Route>
   <Route path='/pazljivko' element={<Pazljivko></Pazljivko>}></Route>
   <Route path='/rasporedCasova' element={<RasporedCasova></RasporedCasova>}></Route>
   <Route path='/stomatolog' element={<Stomatolog></Stomatolog>}></Route>
   <Route path='/rasporedZvona' element={<RasporedZvona></RasporedZvona>}></Route>
   <Route path='/otvorenaVrata' element={<OtvorenaVrata></OtvorenaVrata>}></Route>
   <Route path='/dopisiMinistarstva' element={<DopisiMinistarstva></DopisiMinistarstva>}></Route>
   <Route path='/projekti' element={<Projekti></Projekti>}></Route>
   <Route path='/maraton' element={<CitalackiMaraton></CitalackiMaraton>}></Route>
   <Route path='/skolskiOdbor' element={<SkolskiOdbor></SkolskiOdbor>}></Route>
   </Routes>
   <Footer></Footer>
   </BrowserRouter> 
  );
}

export default App;
