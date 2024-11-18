import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import ParkingSpace from './Components/ParkingSpace';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <ParkingSpace/>
    </div>
  );
}

export default App;
