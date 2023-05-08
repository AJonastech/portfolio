import Experience from "./Pages/Experience";
import Index from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
function App() {

  return (
    
    <Routes>
        <Route element ={ <Index/>} path="/" />
        <Route element={<Experience/>} path="/experience"/>
        <Route element ={<Projects/>} path="/projects"/>
        <Route element={<Contacts/>} path="/contact"/>
      </Routes>

  

  
  );
}

export default App;
