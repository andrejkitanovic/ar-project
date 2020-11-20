import "./App.css";

// import ARComponent from './ARComponent'
import Model from './assets/models/test.usdz'
import Model2 from './assets/models/frame.usdz'

function App() {
  return (
    <div className="App">
      {/* <ARComponent/> */}
      <a href={Model} rel="al">Wall Picture</a>
      <a href={Model} rel="al">Table Picture</a>
    </div>
  );
}

export default App;
