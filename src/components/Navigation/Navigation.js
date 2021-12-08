import {Box, Card} from "@mui/material";

export default function Navigation(){
    const style = {
        width: 375,
        height: 225,
        border: 0,
    }
    return(
        <Box sx={{
            width:{
                xs: 375,
                x: 350,
            },
            height:{
                xs: 225,
            },
            mb: 9,
        }}>
            <Card variant="outlined" sx={{
                mx: 2,
            }}>
                <iframe title="myFrame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.127912789328!2d13.376520096836984!3d52.52570812210563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84dd62abc4223%3A0x96ccc3a98ef2f9bb!2sCharit%C3%A9%20Campus%20Mitte!5e0!3m2!1sen!2sde!4v1638968078071!5m2!1sen!2sde" style={style} loading="lazy"></iframe>
            </Card>
        </Box>
    )
}