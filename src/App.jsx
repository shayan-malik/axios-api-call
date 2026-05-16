import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import CategoryPage from './pages/CategoryPage';


function App() {
  
  return (
    <div className="App">

      <Header/>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:categoryName' element={<CategoryPage />} />
        </Routes>


      <Footer />

      

      

      </div>

  );
}

export default App;


