import Notification from "./Notification";
import {Card} from "@mui/material";

export default function Notifications({desc, time, day}){
    return(
        <Card variant="outlined"  sx={{
            width:{
                xs: 175,
            },
            height:{
                xs: 225,
            },
            mr:1,
            ml:2,
            my:2,
            p:1,
        }}>
            <Notification desc={"Termin bei Radiologie"} time={"12:00"} day={"12.11.2021"}/>
            <Notification desc={"Termin bei Radiologie"} time={"12:00"} day={"12.11.2021"}/>
        </Card>
    )
}