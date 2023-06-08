import { Button, Drawer, Stack, Typography } from "@mui/material"

import logo from "../assets/logo.svg"
import styled from "@emotion/styled";

const LpNavTypography = styled(Typography)`
    font-family: Noto Sans;
    font-weight: bold;
    font-size: 32px
`

const LpParagraph = styled('p')`
    font-family: Noto Sans;
    font-weight: normal;
    max-height: 20rem;
    color: white;
    font-size: 24px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`

const path = window.location.pathname

const SideBar = ({width}) => {
    return(
        <Drawer 
        anchor="right"
        variant="permanent"
        sx={{
            width: width,
            flexShrink: 0,
        }}
        PaperProps={{
            sx: {
                width: width,
                boxSizing: 'border=box',
                flexDirection: "row",
                alignItems: "center",
                background: "#443F3F",
            }
        }}
        >
            <Stack sx={{flexGrow: 1, alignItems: "center", color: "#f4f4f4"}}>
                
                <img src={logo} style={{width: "168px", height: "168px"}} />

                <LpNavTypography>
                    Profile Maker
                </LpNavTypography>

                {path === "/credential/register" &&
                <>
                    <LpParagraph>
                        Already have an account?
                    </LpParagraph>

                    <Button
                    disableElevation
                    variant="contained"
                    color="secondary"
                    href="/credential/login"
                    sx={{
                        borderRadius: "0px",
                        fontSize: "20px",
                        padding: "12px 36px"
                    }}>
                        SIGN IN
                    </Button>
                </>
                }

                {path === "/credential/login" &&
                <>
                    <LpParagraph>
                        Don't have an account?
                    </LpParagraph>

                    <Button 
                    disableElevation
                    variant="contained"
                    color="secondary"
                    href="/credential/register"
                    sx={{
                        borderRadius: "0px",
                        fontSize: "20px",
                        padding: "12px 36px"
                    }}>
                        SIGN UP
                    </Button>
                </>
                }

            </Stack>
        </Drawer>
    )
}

export default SideBar