import {Box, Card, Typography} from "@mui/material";

function UserData({percent, satz}) {
    const screenWidth = window.screen.width

    let ccolor = "red"

    function handleClick(){
        console.log('clicked')
    }

    return(
        <Box sx={{
            width:{
                xs: screenWidth,
            },
            height:{

            }
        }}>
            <Card variant="outlined" onClick={handleClick}
                sx={{
                    mx:2,
                }}>
                <Box>
                    <Typography variant={'subtitle1'} sx={{
                        mt: 1,
                        mx: 2,
                        fontWeight: 600,
                    }}>Meine Daten</Typography>
                    <Typography variant={'h2'} sx={{
                        fontWeight: 700,
                        color: ccolor,
                        textAlign: 'center',
                        fontSize: 75,
                    }}>{percent}%</Typography>
                    <Typography variant={'body2'} sx={{
                        mx: 2,
                        fontSize: 12,
                        mb: 1,
                        color: ccolor,
                        fontWeight: 450,
                    }}>{satz}</Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default UserData