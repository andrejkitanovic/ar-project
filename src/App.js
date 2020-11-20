import './App.css'

// import ARComponent from './ARComponent'
// import Model from './assets/models/test.usdz'
// import Model2 from './assets/models/frame.usdz'
// import usdz from "./test.usdz";
import glb from './out.glb'
import usdz from './out.usdz'

// import "@google/model-viewer";
// import { ModelViewer, ARButton } from "@real2u/react-ar-components";

import {  isIOS } from 'react-device-detect'

// import Image from './image.jpg'
// import { useState } from "react";

function App() {
  // const [displayPicture, setDisplayPicture] = useState(false);
  return (
    <div className="App">
      <div className="image">
        <div className="choosen-image">
          <model-viewer ar src={glb} alt="this is a 3d model"></model-viewer>
          {/* <img src={Image} alt="gallery"/> */}
        </div>

        {/* {isBrowser && (
          <button className="view" onClick={() => setDisplayPicture(true)}>
            View model in 3d
          </button>
        )}
        {isMobile && (
          <button className="view">
            <ARButton glb={glb} usdz={usdz}>
            </ARButton>
          </button>
        )} */}
        {isIOS && <a href={usdz} className="view">View model in 3d</a>}
      </div>

    
    </div>
  )
}

export default App
