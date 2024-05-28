import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Plants from "./components/Plants"
import PlantDetails from "./components/PlantDetails"
import './App.css';

const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/plants" Component={Plants}/>
      <Route exact path="/plants/:id" Component={PlantDetails}/>
    </Routes>
  </BrowserRouter>
)

export default App;
