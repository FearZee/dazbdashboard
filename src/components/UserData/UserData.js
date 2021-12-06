import './UserData.css'
import {Card} from "@mui/material";

function UserData({percent, satz}) {

    function handleClick(){
        console.log('clicked')
    }

    return(
        <div className={"UserData"}>
            <Card variant="outlined" onClick={handleClick}
                sx={{
                    mx:2,
                }}>
                <h6>Meine Daten</h6>
                <h1>{percent}%</h1>
                <p>{satz}</p>
            </Card>
        </div>
    )
}

export default UserData