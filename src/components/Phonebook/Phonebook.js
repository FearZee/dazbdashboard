import {Box, Card} from "@mui/material";
import Contacts from "./Contacs";

export default function Phonebook(){
    const testContacts = [{
        name: "Dr. Hartwig",
        bereich: 'Radiologie',
        nummer: '+498001721212',
    },{
        name: "Dr. Apelt",
        bereich: 'Herzchirurgie',
        nummer: '+498001721212',
    }]
    return(
        <Box sx={{
            width:{
                xs: 175,
            },
            height:{
                xs: 225,
            },
        }}>
            <Card variant="filled" sx={{
                mr:2,
                ml:1,
                my:2,
            }}>
                {testContacts.map((e) => (<Contacts name={e.name} bereich={e.bereich} nummer={e.nummer}></Contacts>))}
                {/*<Contacts name={"Dr. Hartwig"} bereich={"Radiologie"} nummer={}></Contacts>*/}
                {/*<Contacts name={"Dr. Hartwig"} bereich={"Radiologie"} nummer={0o1231234567}></Contacts>*/}

            </Card>
        </Box>
    )
}