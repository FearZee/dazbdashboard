import "./Notification.css";
import {Container} from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {pink} from "@mui/material/colors";

function Notification({visibility = 'visible'}){
    return (
        <div style={{visibility: visibility}}>
            <Container className={"notification-container"} maxWidth="sm">
                <WarningAmberIcon sx={{color: pink[500], fontSize: 30}}/>
                <p>
                    Du hast noch nicht alle nötigen Dokumente hochgeladen.
                    Lade sie sobald wie möglich hoch, um eine schnellere
                    Bearbeitung zu ermöglichen.
                </p>
            </Container>
        </div>
    )
}

export default Notification;