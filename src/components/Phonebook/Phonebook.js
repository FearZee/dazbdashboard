import {Card} from "@mui/material";
import Contacts from "./Contacs";

export default function Phonebook(){
    return(
        <Card variant="filled" sx={{
            width:{
                xs: 175,
            },
            height:{
                xs: 225,
            },
            mr:2,
            ml:1,
            my:2,
        }}>
            <Contacts name={"Dr. Hartwig"} bereich={"Radiologie"} nummer={0o1231234567}></Contacts>
            <Contacts name={"Dr. Hartwig"} bereich={"Radiologie"} nummer={0o1231234567}></Contacts>

        </Card>
    )
}