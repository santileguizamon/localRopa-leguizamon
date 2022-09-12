
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/Items/:categoryId' element={<ItemListContainer greeting='BullMarket'/>}/>
        <Route path='/Detail/:prodId' element={<ItemDetailContainer/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
