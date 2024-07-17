import { Routes, Route } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";

function App() {
  return (
    <div>
        {/* <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "/about" element = {<AboutPage/>}/>     
            <Route path = "*" element = {
                <p>Page 404 Not Found</p>
            }/>              

        </Routes> */}
        <HomePage/>
    </div>
    
  );
}

export default App;
