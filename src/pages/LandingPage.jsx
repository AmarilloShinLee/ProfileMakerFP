import styled from "@emotion/styled";
import lpBackground from '../assets/landingPageBackground.png'

import { Container, Box, Typography, Stack, Button } from '@mui/material'

import NavBar from '../components/NavBar';

const LpTypography = styled(Typography)`
    font-family: Noto Sans;
    font-weight: bold;
    color: white;
    font-size: 48px
`;

const LpParagraph = styled('p')`
    font-family: Noto Sans;
    font-weight: normal;
    max-height: 20rem;
    color: white;
    font-size: 24px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`

const LandingPage = () => {
    return(
        <>
            <NavBar />
            <Container 
            maxWidth="100%"
            sx={{
                display: "flex",
                alignItems: "center", 
                height: "92.24vh", 
                backgroundImage: `url(${lpBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
                <Stack 
                maxWidth="700px"
                sx={{
                    backgroundColor: "white", 
                    padding: "48px",
                    margin: "2rem",
                    borderRadius: "32px",
                    background: "linear-gradient(212.23deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0px 12px 8px rgba(0, 0, 0, 0.5)"
                }}
                >

                    <LpTypography>PROFILE MAKER</LpTypography>

                    <LpParagraph>
                    Whether you're a freelancer, entrepreneur, or job seeker, your online profile can make all the difference. 
                    Use Profile Maker to create a polished and compelling profile that gets noticed.
                    </LpParagraph>
                    <LpParagraph>Start today and take your career to the next level!</LpParagraph>

                    <Stack direction="row" spacing={2}>
                        <Button
                        disableElevation
                        variant="contained" color="primary"
                        href="/credential/login"
                        sx={{
                            borderRadius: "0px",
                            fontSize: "20px", padding: "12px 36px"
                        }}>
                            Login
                        </Button>

                        <Button
                        disableElevation
                        variant="contained" color="secondary"
                        href="/credential/register"
                        sx={{
                            borderRadius: "0px",
                            fontSize: "20px",
                            padding: "12px 36px"
                        }}>
                            Register
                        </Button>
                    </Stack>

                </Stack>
            </Container>
        </>
    );
}

export default LandingPage;