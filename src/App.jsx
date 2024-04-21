import { NavBar } from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Auth } from './Pages/auth';
import { Home } from './Pages/home';
import { Movie } from './Pages/movie';
import { TvShow } from './Pages/tvshow';

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/rated' element={<h1>Rated</h1>}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/tvshow/:id' element={<TvShow />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
