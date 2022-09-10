import Sswiper from './components/header/Swiper';
import './App.css';
import Icons from './components/body/Icons';
import Boxs from './components/body/Boxs';
import Offerbox from './components/body/Offerbox';
import Galarykala from './components/body/Galarykala';
import Sortdigikala from './components/body/Sortdigikala';
import Tophead from './components/header/Tophead';
function App(){
  return (
      <div>
        <Tophead/>
        <Sswiper/>
        <Icons/>
        <Boxs/>
        <Offerbox/>
        <Galarykala/>
        <Sortdigikala/>
      </div>
   
  );
}

export default App;
