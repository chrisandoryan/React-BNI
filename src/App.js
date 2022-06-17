import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general_style.css';

function App() { // functional component
  const name = "FanPepsita";
  const address = "Jl. Kebun Buah 11, Jakarta";

  return (
    <div className="App">
      <HomePage userName={name} userAddress={address}>
      </HomePage>
    </div>
  );
}

export default App;
