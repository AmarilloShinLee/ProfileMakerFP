import { Container } from "@mui/material"

import { LoginForm } from "../../components/Form"

const Login = () => {
    return(
        <Container
            maxWidth="100%"
            sx={{
                flexGrow: 1,
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <LoginForm/>
        </Container>
    )
}

export default Login