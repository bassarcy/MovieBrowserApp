import './App.css'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
