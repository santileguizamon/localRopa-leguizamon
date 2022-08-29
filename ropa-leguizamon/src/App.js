import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import cartWidgets from './components/NavBar/cartWidgets';
import titulo from './components/NavBar/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar> <cartWidgets/></NavBar>
      <titulo/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
