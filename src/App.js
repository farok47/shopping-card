import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Card from "./pages/Card"
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='card' element={<Card/>} />
     </Routes>
    </div>
  );
}

export default App;
