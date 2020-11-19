import "./App.css";
import "aframe";
import {
  // Box,
  // Sphere,
  // Cylinder,
  // Plane,
  // Sky,
  // Text,
  // Scene,
  AFrameRenderer,
  Marker
} from "react-web-ar";

function App() {
  return (
    <div>
    <AFrameRenderer>
      <Marker parameters={{preset:"hiro"}}>
        <a-box color="blue">

        </a-box>
      </Marker>
    </AFrameRenderer>
    </div>
  );
}

export default App;
