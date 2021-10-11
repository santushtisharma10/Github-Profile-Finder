import { logDOM } from '@testing-library/dom';
import './App.css';
import Profile from './components/Profile';
import logo from "./images.png" 

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <div className="heading">
      <img src={logo} />Find GitUser
      </div>
      <br />
      <br />
      <Profile />
      
    </div>
  );
}

export default App;
