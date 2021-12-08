import './App.css';
import Header from "./components/Header/Header";
import User from "./components/User/User"
import UserData from "./components/UserData/UserData";
import Notifications from "./components/Notification/Notifications";
import Phonebook from "./components/Phonebook/Phonebook";
import {Box} from "@mui/material";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header/>
        <User avatar={"/avatar.jpg"} bereich={'Pflegekraft'} name={'Max Mustermann'}/>
        <UserData percent={60} satz={'Fast geschafft...'}/>
      <Box className={'flex'} sx={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Notifications/>
        <Phonebook></Phonebook>
      </Box>
        <Navigation/>
    </div>
  );
}

export default App;
