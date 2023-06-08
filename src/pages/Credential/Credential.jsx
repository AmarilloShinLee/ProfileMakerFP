import { Box, Container, Stack } from "@mui/material"

import Circles from "../../assets/Circles.svg"

import SideBar from "../../components/SideBar"
import { Outlet } from "react-router-dom";

const drawerWidth = 367;

const CredentialLayout = () => {
    return (
        <Box 
        sx={{
            display: "flex",
            background: `url(${Circles}), linear-gradient(63.18deg, #E83636 0%, #F17A54 100%)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }}>
            <Outlet />
            
            <SideBar width={drawerWidth} />
        </Box>
    )
}

export default CredentialLayout