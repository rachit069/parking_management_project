import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import ParkingSpace from './Components/ParkingSpace';
import Wallet from './Components/Wallet';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <ParkingSpace/>
      <Wallet/>
    </div>
  );
}

export default App;
