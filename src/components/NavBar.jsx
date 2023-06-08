import styled from "@emotion/styled";
import logo from "../assets/logo.svg"
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

const LpNavTypography = styled(Typography)`
    font-family: Noto Sans;
    font-weight: bold;
    font-size: 32px
`;

const NavBar = () => {
    return(
        <AppBar sx={{height: "128px", flexDirection: "row", justifyContent: "center", backgroundColor: "#443f3f"}} component="nav" position="relative" elevation={0}>
            <Toolbar>
                {/* <Typography variant="h4" sx={{ }}>
                    ProfileMaker
                </Typography> */}

                <Stack alignItems="center" direction="row" spacing={2}>
                    <img src={logo} style={{width: "81px", height: "81px"}}/>

                    <LpNavTypography>
                        ProfileMaker
                    </LpNavTypography>
                </Stack>

                {/* <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="secondary">
                        Login
                    </Button>

                    <Button variant="contained" color="secondary">
                        Register
                    </Button>
                </Stack> */}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;