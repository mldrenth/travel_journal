import logo from './logo.svg';
import './App.css';
import {FaGlobeAmericas} from 'react-icons/fa'
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaGlobeAmericas id="globe"/>
        <p>my travel journal</p>
      </header>
      <CardList/>
    </div>
  );
}

export default App;
