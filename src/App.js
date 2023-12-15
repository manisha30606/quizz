
import {Route,Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Description from "./Routes/Descriptions";
import Quizz from './Routes/Quiz';

function App() {
  return (
    <>
             <div className="App">
      <Routes>
  
        <Route path="/" element={<Home/>}/>
        <Route path="/description" element={< Description/>}/>
        <Route path="/quizz" element={<Quizz/>}/>
     
     
      </Routes>
      
     
   

   
    </div>
</>
  );
}

export default App;
