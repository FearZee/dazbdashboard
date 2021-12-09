import "./Navigation.css"
import { Icon } from '@iconify/react';
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";

export default function NavigationBar() {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,  width: window.screen.width}} elevation={3}>
            <BottomNavigation sx={{ height: 100 }} showLabels>
                <BottomNavigationAction
                    label="Deine Daten"
                    value="userdata"
                    icon={<Icon icon="mdi:account-box" width="50"/>}
                />
                <BottomNavigationAction
                    label="Karte"
                    value="map"
                    icon={<Icon icon="mdi:map" width="50"/>}
                />
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<Icon icon="mdi:home-city" width="50"/>}
                />
                <BottomNavigationAction
                    label="Kalender"
                    value="calendar"
                    icon={<Icon icon="mdi:calendar" width="50"/>}
                />
                <BottomNavigationAction
                    label="Telefonbuch"
                    value="phonebook"
                    icon={<Icon icon="mdi:card-account-phone" width="50"/>}
                />
            </BottomNavigation>
        </Paper>
    )
}