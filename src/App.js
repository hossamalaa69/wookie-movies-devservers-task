import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Search from './pages/search/Search';
import NotFound from './pages/not-found/NotFound';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router className="App">
        <Navbar />
        <Routes>
            <Route path='*' element = { <NotFound /> } />
            <Route path='/search/:query' element = { <Search/> } />
            <Route path='/details/:movie_id' element = { <Details/> } />
            <Route path='/' element = { <Home/> } />        
        </Routes>
    </Router>
  );
}

export default App;
