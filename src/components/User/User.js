import {Avatar, Box, Typography} from "@mui/material";

function User({name, bereich, avatar}){
    return (
        <Box sx={{
        }}>
            <Box sx={{
                my: 2,
                mx: 2,
                display: 'flex',
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
        </Box>
    )
}

export default User