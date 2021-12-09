import {Grid} from "@mui/material";
import Calendar from "./Tiles/Calendar/Calender";
import Phonebook from "./Tiles/Phonebook/Phonebook";
import UserData from "./Tiles/UserData/UserData";
import GoogleMap from "./Tiles/Map/Map";

function TileGrid() {
return(
    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
            <Calendar/>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
            <UserData/>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
            <Phonebook/>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
            <GoogleMap/>
        </Grid>
    </Grid>
    )
}

export default TileGrid;