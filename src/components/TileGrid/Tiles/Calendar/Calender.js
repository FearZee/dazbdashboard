import "./Calender.css";
import {Container, List, ListItem} from "@mui/material";
import Date from "./Date/Date";

export default function CalendarList(){
    return (
        <Container className={"calender-container"} maxWidth="sm">
            <List>
                <ListItem>
                    <Date
                        date={"12.12.12"}
                        time={"12:12"}
                        name={"Termin bei der Radiologie"}
                        color={"#056BB7"}
                        icon={"mdi:radioactive"}
                    />
                </ListItem>
                <ListItem>
                    <Date
                        date={"12.12.12"}
                        time={"12:12"}
                        name={"Termin bei der Diagnosestation"}
                        color={"green"}
                        icon={"healthicons:health-data-security"}
                    />
                </ListItem>
            </List>
        </Container>
    )
}
