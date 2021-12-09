import "./Date.css";
import {Container} from "@mui/material";
import { Icon } from '@iconify/react';

function Date({time, date, name, icon, color}){
    return (
        <Container className={"date-container"} style={{color: color}} maxWidth="sm">
            <div className={"date-row"}>
                <Icon
                    className="date-icon"
                    style={{backgroundColor: color}}
                    color="#fff"
                    width="10vw"
                    height="10vh"
                    icon={icon}/>
                <div>
                    <p>{name}</p>
                    <p>
                        {time}<br/>
                        {date}
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Date;