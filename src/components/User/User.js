import "./User.css"
import {Avatar, Box, Typography} from "@mui/material";

function User({name, bereich, avatar}){
    return (
        <Box sx={{
            display: 'flex',
            my: 2,
            mx: 2,
        }}>
            <Avatar alt={name} src="/avatar.jpg" sx={{
                width: 60,
                height: 60,
            }}/>
            <Box sx={{
                mx:1,
            }}>
                <Typography variant={'h6'}>{name}</Typography >
                <Typography vatiant={'caption'}>{bereich}</Typography>
            </Box>
        </Box>
    )
}

export default User