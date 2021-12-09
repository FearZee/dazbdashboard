import Notification from "./Notification";
import {Card} from "@mui/material";

export default function Notifications(){
    const screenWidth = window.screen.width/2

    const testNotification = [{
        desc: 'Termin bei Radiologie',
        time: '12:00',
        day: '12.11.2021'
    },{
        desc: 'Termin: diagnostische Station',
        time: '12:00',
        day: '13.11.2021'
    }]
    return(
        <Card variant="outlined"  sx={{
            width:{
                xs: screenWidth,
            },
            height:{
                xs: 225,
            },
            mr:1,
            ml:2,
            my:2,
            p:1,
        }}>
            {testNotification.map((e) => (<Notification desc={e.desc} time={e.time} day={e.day}/>))}
            {/*<Notification desc={"Termin bei Radiologie"} time={"12:00"} day={"12.11.2021"}/>*/}
            {/*<Notification desc={"Termin bei Radiologie"} time={"12:00"} day={"12.11.2021"}/>*/}
        </Card>
    )
}