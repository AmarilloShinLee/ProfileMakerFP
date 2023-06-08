
import styled from "@emotion/styled";
import { Container, Chip, FormControlLabel, Box, Stack, Button, Typography, TextField, Checkbox, RadioGroup, Radio } from "@mui/material"
import { useState, useEffect } from "react";

const LpTypography = styled(Typography)`
    font-family: Noto Sans;
    font-weight: bold;
    color: white;
    font-size: 32px;
    text-align: center
`;

const formDesign = {
    backgroundColor: "white", 
    padding: "48px",
    margin: "2rem",
    borderRadius: "32px",
    background: "linear-gradient(212.23deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
    backdropFilter: "blur(8px)",
    boxShadow: "0px 12px 8px rgba(0, 0, 0, 0.5)",
    flexGrow: 1
}

const buttonDesign = {
    borderRadius: "0px",
    fontSize: "20px",
    padding: "12px 36px"
}

const radioButtonDesign = {
    background: "linear-gradient(180deg, #F17A54 0%, #E83636 100%)",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    justifyContent: "center",
    minWidth: "238px",
    minHeight: "96px",
    color: "#f4f4f4"
}

const radioButtonSelectedDesign = {
    background: "linear-gradient(180deg, #EECA93 0%, #F17A54 100%)",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    justifyContent: "center",
    minWidth: "238px",
    minHeight: "96px",
    color: "#f4f4f4"
}

const RegisterUserDetailForm = ( {inputs, setInputs, onSubmit} ) => {
    
    const handleInputs = (e, index) => {
        let newField = [...inputs];
        newField[index]["value"] = e.target.value;
        setInputs(newField);
    }

    return (
        <Stack 
        maxWidth="560px"
        component="form"
        onSubmit={onSubmit}
        spacing={4}
        sx={formDesign}
        >
            <LpTypography>REGISTER</LpTypography>

            {inputs.map((el, ind) => {
                return(
                    <TextField onChange={(e) => handleInputs(e, ind)} color="common" error={el.error} helperText={el.helperText} key={inputs.key}  label={el.label} type={el.type} />
                )
            })}

            <Box>
                <Button type="submit" disableElevation sx={buttonDesign} variant="contained" color="primary">
                    NEXT
                </Button>
            </Box>
        </Stack>
    )
}

const RegisterUserSkillForm = ( {skillDesc, setSkillDesc, onSubmit, onDelete} ) => {

    const [skillInput, setSkillInput] = useState("");

    const enterSkill = (e) => {
        if (e.keyCode !== 13) return;
        
        e.preventDefault();

        let newField = [...skillDesc];
        newField.push(e.target.value);
        setSkillDesc(newField);

        setSkillInput("");
    }

    return (
        <Stack 
        maxWidth="560px"
        component="form"
        onSubmit={onSubmit}
        spacing={4}
        sx={formDesign}
        >
            <LpTypography>SKILLS</LpTypography>

            {skillDesc.length !== 0 && 
                <Stack direction="row" spacing={1} sx={{overflow: "auto", padding: "0.5rem 0"}}>
                    {skillDesc.map((data, index) => {
                        return (
                            <Chip label={data} onDelete={onDelete}/>
                        )
                    })}
                </Stack>
            }

            <TextField
                placeholder="What are your skills?"
                sx={{background: "#F7F7F7" }}
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={enterSkill}
            />

            <Box>
                <Button type="submit" disableElevation sx={buttonDesign} variant="contained" color="primary">
                    NEXT
                </Button>
            </Box>
        </Stack>
    )
}

const RegisterUserDescForm = ({userDesc, setUserDesc, onSubmit}) => {
    return (
        <Stack 
        maxWidth="560px"
        minHeight="420px"
        maxHeight="420px"
        component="form"
        onSubmit={onSubmit}
        spacing={4}
        sx={formDesign}
        >
            <LpTypography>ABOUT ME</LpTypography>

            <TextField
                placeholder="Tell us about yourself"
                multiline
                rows={8}
                sx={{background: "#F7F7F7"}}
                onChange={(e) => setUserDesc(e.target.value)}
            />

            <Box>
                <Button type="submit" disableElevation sx={buttonDesign} variant="contained" color="primary">
                    NEXT
                </Button>
            </Box>
        </Stack>
    )
}

const RegisterUserType = ({userType, setUserType, onSubmit}) => {
    return (
        <Stack 
        maxWidth="560px"
        minHeight="320px"
        maxHeight="480px"
        component="form"
        onSubmit={onSubmit}
        spacing={4}
        sx={formDesign}
        >
            <LpTypography>ARE YOU LOOKING FOR A JOB OR EMPLOYEES?</LpTypography>

            <RadioGroup row onChange={(e) => {setUserType(e.target.value)}} sx={{display: "flex", justifyContent: "space-around", gap: "32px"}}>
                <FormControlLabel 
                value="Employee"
                control={<Radio sx={{display: "none"}}/>}
                label="Looking for a Job"
                sx={userType === "Employee" ? radioButtonSelectedDesign : radioButtonDesign}
                />
                <FormControlLabel
                value="Employer"
                control={<Radio sx={{display: "none"}} />}
                label="Looking for Employees"
                sx={userType === "Employer" ? radioButtonSelectedDesign : radioButtonDesign}
                />
            </RadioGroup>

            <Box>
                <Button type="submit" disableElevation sx={buttonDesign} variant="contained" color="primary">
                    SUBMIT
                </Button>
            </Box>
        </Stack>
    )
}

const LoginForm = () => {
    const loginInputs = [
        {label: "Email", type: "email"},
        {label: "Password", type: "password"}
    ];

    const [inputs, setInputs] = useState(loginInputs);

    const handleInputs = (e, index) => {
        let newField = [...inputs];
        newField[index]["value"] = e.target.value;
        setInputs(newField);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        inputs.map((el) => {
            console.log(el.value);
        })
    }

    return (
        <Stack 
        maxWidth="560px"
        minHeight="360px"
        maxHeight="360px"
        component="form"
        onSubmit={onSubmit}
        spacing={4}
        sx={formDesign}
        >
            <LpTypography>LOGIN</LpTypography>

            {inputs.map((el, ind) => {
                return(
                    <TextField onChange={(e) => handleInputs(e, ind)} sx={{background: "#F7F7F7"}} label={el.label} type={el.type} />
                )
            })}

            <Box>
                <Button type="submit" disableElevation sx={buttonDesign} variant="contained" color="primary">
                    SUBMIT
                </Button>
            </Box>
        </Stack>
    )
}

export { LoginForm, RegisterUserDetailForm, RegisterUserSkillForm, RegisterUserDescForm, RegisterUserType }