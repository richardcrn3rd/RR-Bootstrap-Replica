import './App.css';
import TopBar from './components/TopBar.js'
import Background from './components/Background.js'
import StoreListings from './components/StoreListings.js'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
