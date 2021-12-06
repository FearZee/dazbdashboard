import './App.css';
import Header from "./components/Header/Header";
import User from "./components/User/User"
import UserData from "./components/UserData/UserData";
import Notifications from "./components/Notification/Notifications";

function App() {
  return (
    <div className="App">
      <Header/>
        <User avatar={"/avatar.jpg"} bereich={'Pflegekraft'} name={'Max Mustermann'}/>
        <UserData percent={60} satz={'Fast geschafft...'}/>
        <Notifications/>
    </div>
  );
}

export default App;
