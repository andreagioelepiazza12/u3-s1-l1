import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Img from './components/Img';
import Topbar from './components/Topbar';

function App() {
  return (

    

    <div className="App">
      <Topbar 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsjhhhOu9t12bISYMiizUBWLviyE14DHyCw&s"
      alt="Logo"
      first="Home"
      second="About us"
      />
      <Button text="il mio bottone"/>
    <Img 
    src=""
    alt="random image"
    />
    </div>
    
  );
}

export default App;
