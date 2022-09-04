
import './App.css';
import NavBar from './components/NavBar/NavBar'
import itemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar> <cartWidgets/></NavBar>
      
      <itemListContainer greeting='BullMarket'/>
    </div>
  );
}

export default App;
