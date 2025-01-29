import './App.css';
import TopBar from './src/components/TopBar'
import Background from './src/components/Background'
import StoreListings from './src/components/StoreListings'


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
