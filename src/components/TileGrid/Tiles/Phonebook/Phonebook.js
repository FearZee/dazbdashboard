import {Container, List, ListItem} from "@mui/material";
import Contact from "./Contact/Contact";
import "./Phonebook.css"

function Phonebook() {
    return(
        <Container className={"phonebook-container"} maxWidth="sm">
            <List>
                <ListItem>
                    <Contact/>
                </ListItem>
                <ListItem>
                    <Contact/>
                </ListItem>
            </List>
        </Container>
    )
}

export default Phonebook;