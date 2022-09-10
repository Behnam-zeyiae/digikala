import Sswiper from './components/Swiper';
import './App.css';
import Tophead from './components/Tophead';
import Icons from './components/Icons';
import Boxs from './components/Boxs';
import Offerbox from './components/Offerbox';
import Galarykala from './components/Galarykala';
import Sortdigikala from './components/Sortdigikala';
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
