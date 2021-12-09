import './App.css';
import Header from "./components/Header/Header";
import User from "./components/User/User"
import Notification from "./components/Notification/Notification";
import TileGrid from "./components/TileGrid/TileGrid";
import NavigationBar from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <User avatar={"/avatar.jpg"} bereich={'Pflegekraft'} name={'Max Mustermann'}></User>
            <Notification/>
            <TileGrid/>
            <NavigationBar/>
        </div>
    </div>
  );
}

export default App;
