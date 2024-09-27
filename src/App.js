import './App.css';
import Cage from './Images/Vector.svg';
import Button from './Images/Button.svg';
function App() {
  return (
    <div className="App"> 
       <div class="rec">
       <img src={Cage} alt="Vector"  className="circular-image"/>
       </div>
       <div class="button">
       <img src={Button} alt="Button"  className="circular-image"/>
       </div>
       <div className="ellipse1"></div>
       <div className="ellipse"></div>
       <div className="dev">UI DEVELOPER ASSIGNMENT</div>
      <div className="company">COMPANY</div>
      <div className="pay">Juspay Technologies Private Limited</div>
    </div>
  );
}

export default App;

