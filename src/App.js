import "./App.css";

import glb from "./assets/models/test.glb";
import usdz from "./assets/models/test.usdz";

import { isIOS, isAndroid } from "react-device-detect";

import example from "./assets/images/example.png";
import androidios from "./assets/images/androidios.png";

function App() {
  return (
    <div className="App">
      <div className="modal">
        <div className="picture">
          <h1>Girl with a heart</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="circle">
            <div className="circle-ar">
              <span>AR</span>
            </div>
            <div className="container">
              <img src={example} alt="Example usage" />
              <div className="usage">
                <p>Place your picture in real world with only one click!</p>
                <p className="supported">Supported:</p>
                <img src={androidios} alt="Android IOS" />
              </div>
            </div>
             {isIOS && <a href={usdz} className="view">View model in 3d</a>}
             {isAndroid && <model-viewer controls camera-target="0m 0m 0m" ar src={glb} alt="this is a 3d model"></model-viewer>}
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
