import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import { Stack, Box} from "@mui/material"
import { RegisterUserDescForm, RegisterUserDetailForm, RegisterUserSkillForm, RegisterUserType } from "../../components/Form"

const Register = () => {
    document.body.style.overflow = "hidden";

    const registerInputs = [
        {label: "First name", type: "text", key: "firstname", error: false, helperText: ""},
        {label: "Last name", type: "text", key: "lastname", error: false, helperText: ""},
        {label: "Email", type: "email", key: "email", error: false, helperText: ""},
        {label: "Password", type: "password", key: "password", error: false, helperText: ""},
        {label: "Confirm Password", type: "password", key: "confirmpassword", error: false, helperText: ""},
    ]

    const [inputs, setInputs] = useState(registerInputs);
    const [skillDesc, setSkillDesc] = useState([]);
    const [userDesc, setUserDesc] = useState("");
    const [userType, setUserType] = useState("");

    const submitUserDetails = (e) => {
        e.preventDefault();

        let valid = true;
        let errorField = [...inputs];

        inputs.map((el, ind) => {
            if (el.value === undefined) {
                valid = false;
                errorField[ind].error = true;
                errorField[ind].helperText = `${el.label} is required!`
                setInputs(errorField);
            }

            if (el.key === "confirmpassword" && inputs[ind - 1].value !== el.value) {
                valid = false;
                errorField[ind].error = true;
                errorField[ind].helperText = `Password is not the same.`
                setInputs(errorField);
            } 
        })

        if (!valid) return;

        window.location.href = "#userSkills"
    }

    const submitUserSkills = (e) => {
        e.preventDefault();

        if (skillDesc.length === 0) {
            alert("Please enter in your skills. Thank you")
            return;
        }

        window.location.href = "#userDesc"
    }

    const deleteUserSkill = (value) => {
        const newTags = skillDesc.filter((val) => val !== value)
        setSkillDesc(newTags)
    }

    const submitUserDesc = (e) => {
        e.preventDefault();

        if (userDesc.trim() === "") {
            alert("Please tell us a few things about yourself. Thank you")
            return;
        }

        window.location.href = "#userType"
    }

    const submitUserType = (e) => {
        e.preventDefault();

        const user = {};

        inputs.map((el) => {
            if (el.key === "firstname") user["firstname"] = el.value
            if (el.key === "lastname") user["lastname"] = el.value
            if (el.key === "email") user["email"] = el.value
            if (el.key === "password") user["password"] = el.value
        })
        user["skills"] = skillDesc;
        user["desc"] = userDesc;
        user["type"] = userType;

        axios.post("http://localhost:5000/register", user)
            .then(res => {
                console.log(res.data);
                alert("Register successful");

                window.location.href = '/credential/login';
            })
            .catch(err => {
                console.log(err);
                alert("Something is wrong");
            })

        console.log(user)
    }

    const steps = [
        {step: 1, stepname: "userDetails", component: <RegisterUserDetailForm inputs={inputs} setInputs={setInputs} onSubmit={submitUserDetails}/>},
        {step: 2, stepname: "userSkills", component: <RegisterUserSkillForm skillDesc={skillDesc} setSkillDesc={setSkillDesc} onSubmit={submitUserSkills} onDelete={deleteUserSkill}/>},
        {step: 3, stepname: "userDesc", component: <RegisterUserDescForm userDesc={userDesc} setUserDesc={setUserDesc} onSubmit={submitUserDesc} />},
        {step: 4, stepname: "userType", component: <RegisterUserType userType={userType} setUserType={setUserType} onSubmit={submitUserType} />}
    ]

    return(
        <Stack maxWidth="100%" sx={{flexGrow: 1}}>
            {/* Use as register! */}
            {steps.map((el) => 
                <div
                id={el.stepname}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
                >
                    {el.component}
                </div>
            )}
        </Stack>
    )
}

export default Register