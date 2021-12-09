import {Avatar, Box, Button, Card, Typography} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Contacts({name, bereich, nummer}){
    const screenWidth = window.screen.width/2

    function handleCall(){
        window.open(`tel:${nummer}`) // Vodafone Kundenservice
    }

    return(
        <Typography  className={"Notification"}>
            <Card variant="outlined"
                  sx={{
                      width:{
                          // xs: screenWidth,
                          s: 200,
                      },
                      height:{
                          xs: 105,
                          s: 150,
                      },
                      // mr:2,
                      // ml:2,
                      // my:2,
                      mb: 1.9,
                  }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Avatar sx={{
                        width: 60,
                        height: 60,
                        ml: 1,
                        mr: .5,
                        mt: 2.5,
                    }}></Avatar>
                    <Box sx={{
                        fontSize: 12,
                        fontWeight: 600,
                        mx: 1,
                        mt: 1.5,
                    }}>{name}
                        <Box sx={{
                            display: 'relative',
                        }}>
                            <Box sx={{
                                fontSize: 10,
                                fontWeight: 400,
                                textAlign: 'left',
                            }}>{bereich}</Box>

                            <Button onClick={handleCall} color="success" variant="contained" size="small" sx={{
                                width:{
                                    // xs: 125,
                                },
                                // mx: 1,
                                my: 1,
                                // mb: 1,
                                background: '#008000',
                            }}>
                                <LocalPhoneIcon sx={{
                                    display: 'block',
                                    ml: 'auto',
                                    mr: 'auto',
                                    justifyContent: 'center',
                                    width: 30,
                                    height: 30,
                                    color: '#fff',
                                }}/>
                            </Button>
                    </Box>
                </Box>
                </Box>
            </Card>
        </Typography>
    )
}