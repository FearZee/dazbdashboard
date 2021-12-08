import './App.css';
import Header from "./components/Header/Header";
import User from "./components/User/User"
import UserData from "./components/UserData/UserData";
import Notifications from "./components/Notification/Notifications";
import Phonebook from "./components/Phonebook/Phonebook";
import {Box, ScopedCssBaseline} from "@mui/material";
import Navigation from "./components/Navigation/Navigation";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
      <ScopedCssBaseline enableColorScheme>
    <div className="App">
      <Header/>
        <User avatar={"/avatar.jpg"} bereich={'Pflegekraft'} name={'Max Mustermann'}/>
        <UserData percent={60} satz={'Fast geschafft...'}/>
      <Box className={'flex'} sx={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Notifications/>
        <Phonebook/>
      </Box>
        <Navigation/>
        <NavBar/>
    </div>
      </ScopedCssBaseline>
  );
}

export default App;
