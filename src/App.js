import './App.css';
import Header from "./components/Header/Header";
import User from "./components/User/User"

function App() {
  return (
    <div className="App">
      <Header></Header>
        <User avatar={"/avatar.jpg"} bereich={'Pflegekraft'} name={'Max Mustermann'}></User>
    </div>
  );
}

export default App;
