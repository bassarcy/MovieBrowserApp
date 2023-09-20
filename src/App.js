import './App.css'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeView />
      <AboutView />
    </div>
  );
}

export default App;
