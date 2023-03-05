import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
       <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <NavBar/>
        <Home>
          
        </Home>
    </div>
  );
}

export default App;
