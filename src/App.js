
import './App.css';
import Datatable from './component/display';
import WordFrequencyChart from './component/histogram';
import Navigation from './component/Navigation';
import Home from './component/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App bg-slate-400  ">
    {/* <Navigation/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/table' Component={Datatable}></Route>
    <Route path='/chart' Component={WordFrequencyChart}></Route>
   </Routes>

   </BrowserRouter>

  
    </div>
  );
}

export default App;
