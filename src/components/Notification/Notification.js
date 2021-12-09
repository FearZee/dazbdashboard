import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import {Box, Card, Typography} from "@mui/material";

export default function Notification({desc, day, time}) {

    function handleClick(){
        console.log('clicked')
    }

    return(
        <Typography  sx={{display: 'flex'}}>
            <Card variant="outlined" onClick={handleClick}
                  sx={{
                      width:{
                          xs: window.screen.width/2,
                          // s: 200,
                      },
                      height:{
                          xs: 100,
                          s: 150,
                      },
                      // mr:2,
                      // ml:2,
                      // my:2,
                      mb:1,
                      float: 'left',
                      position: 'relative',
                  }}>
                <Box sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    mx: 1,
                }}>{desc}</Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: 0,
                    bottom: 1,
                }}>
                    <Box sx={{
                    }}>
                        <Box sx={{
                            fontSize: 12,
                            fontWeight: 600,
                            textAlign: 'right',
                        }}>{time}</Box>
                        <Box sx={{
                            fontSize: 12,
                            fontWeight: 600,
                            textAlign: 'right',
                        }}>{day}</Box>
                    </Box>
                    <EnhancedEncryptionIcon sx={{
                        alignSelf: 'flex-end',
                        width: 40,
                        height: 40,
                        color: 'green',

                    }}/>
                </Box>
            </Card>
        </Typography>
    )
}

// export default Notification