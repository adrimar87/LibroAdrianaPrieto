import logo from './LogoL.svg';
import './App.css';
import Menu from './components/Navbar/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" /> 
        <Menu/>
       
      </header>
     
    </div>
  );
}

export default App;
