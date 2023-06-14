import './App.css';
import Context from './context/Context';
import Routings from './routings/Routings';

function App() {
  return (
    <div className="App">
      <Context>
        <Routings/>
      </Context>
    </div>
  );
}

export default App; 
