import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile"
function App() {
  return (
    <div className="App">
       <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <NavBar/>
        {/* <Home/> */}
        <Auth/>
        {/* <Profile/> */}
    </div>
  );
}

export default App;
