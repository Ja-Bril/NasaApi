import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'
import Search from './components/Search'
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route Component={Home} path='/' exact />
          <Route Component={NasaPhoto} path='/nasaphoto'/>
          <Route Component={Search} path='/search'/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
