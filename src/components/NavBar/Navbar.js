import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import {useState} from "react";
import FolderIcon from '@mui/icons-material/Folder';
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export default function NavBar(){

    const [value, setValue] = useState(2)

    return (
        <Paper sx={{width:window.screen.width, position:'fixed', bottom: 0, left: 0, right: 0}} elevation={5}>
            <BottomNavigation showLabels value={value} onChange={(e, newValue) => {setValue(newValue)}}>
                <BottomNavigationAction label="Daten" icon={<FolderIcon/>}/>
                <BottomNavigationAction label="Karte" icon={<MapIcon/>}/>
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
                <BottomNavigationAction label="Kalender" icon={<DateRangeIcon/>}/>
                <BottomNavigationAction label="Telefon" icon={<ImportContactsIcon/>}/>
            </BottomNavigation>
        </Paper>
    )
}