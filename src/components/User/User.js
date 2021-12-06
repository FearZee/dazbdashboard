import "./User.css"
import {Avatar} from "@mui/material";

function User({name, bereich, avatar}){
    return (
        <div className={'container'}>
            <Avatar alt={name} src="/avatar.jpg" />
            <div className={'usertext'}>
                <h1 className={'name'}>{name}</h1>
                <l className={'fachbereich'}>{bereich}</l>
            </div>
        </div>
    )
}

export default User