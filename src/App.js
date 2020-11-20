import "./App.css";

// import ARComponent from './ARComponent'
// import Model from './assets/models/test.usdz'
// import Model2 from './assets/models/frame.usdz'
import usdz from "./test.usdz";
import glb from "./scene.glb";

import "@google/model-viewer";
import { ModelViewer, ARButton } from "@real2u/react-ar-components";

import {
  BrowserView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import Image from "./image.jpg";
import { useState } from "react";

function App() {
  const [displayPicture, setDisplayPicture] = useState(false);
  return (
    <div className="App">
      <div className="image">
        <div className="choosen-image">
          <img src={Image} alt="gallery"/>
        </div>

        {isBrowser && (
          <button className="view" onClick={() => setDisplayPicture(true)}>
            View model in 3d
          </button>
        )}
        {isMobile && (
          <button className="view">
            <ARButton glb={glb} usdz={usdz}>
              View in 3D
            </ARButton>
          </button>
        )}
      </div>

      {displayPicture && (
        <BrowserView>
          <div className="button-click">
            <ModelViewer glb={glb} name="3D model" />
          </div>
        </BrowserView>
      )}

      {/* <div>
        <h1>ARLink</h1>
        <ARLink glb={glb} usdz={usdz}>
          View in 3D
        </ARLink>
      </div>


      <div>
        <h1>ModelViewer</h1>
        <ModelViewer glb={glb} name="3D model"  />
      </div>
      <div>
        <h1>ARButton</h1>
        <ARButton glb={glb} usdz={usdz} text="View in 3D"  />
      </div> */}
    </div>
  );
}

export default App;
