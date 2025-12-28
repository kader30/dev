
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio';
import MentionsLegales from './pages/MentionsLegales';
import  NavBar  from './Assets/Components/NavBar';
import  Footer  from './Assets/Components/Footer';
function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="Services" element={<Services/>}></Route>
          <Route path ="Contact" element ={<Contact/>}></Route>
          <Route path ="Portfolio" element ={<Portfolio/>}></Route>
          <Route path ="MentionsLegales" element ={<MentionsLegales/>}></Route>
        </Routes>
      
     <Footer></Footer>
    </div>
  );
}

export default App;
