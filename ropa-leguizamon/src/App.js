
import './App.css';
import NavBar from './components/NavBar/NavBar'
import itemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <NavBar> <cartWidgets/></NavBar>
      
      <itemListContainer greeting='BullMarket'/>
    </div>
  );
}

export default App;
