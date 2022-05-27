import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';


function App() {
  return (
    <div className="App">
     
     <Routes>
       <Route exact path="/" element={<HomePage />}/>
       <Route exact path="/:id" element={<BeerDetails />}/>
       <Route exact path="/beers" element={<Beers />}/>
       <Route exact path="/random-beer" element={<RandomBeer />}/>
       <Route exact path="/new-beer" element={<NewBeer />}/>
       <Route exact path="/search?q=:query"/>
     </Routes>
    </div>
  );
}

export default App;
