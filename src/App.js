import logo from './logo.svg';
import './App.css';
import Landing from './Landing'
import Header from './header/Header.jsx'
import Branding from './branding/Branding.jsx'

function App() {
  const name = "ankita"
  return (
    <div className="App">
      hello {name}
      <Landing/>
      <Header/>
      <Branding/>
    </div>
  );
}

export default App;
