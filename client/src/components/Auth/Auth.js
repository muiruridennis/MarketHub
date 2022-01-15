import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { Avatar, Paper, Typography, Grid, Button, Container } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import LockOutlined from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";
import Icon from "./icon";
import Input from "./input";
import { signup, signin } from "../../Actions/auth";

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };
function Auth() {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();

    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setformData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history))

        } else {
            dispatch(signin(formData, history));

        }
        
    };

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const swithMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }
    const gooleSuccess = async (res) => {
        const newUser = res?.profileObj;//when ?.(optional chainning aperator) is added it will return undefined  when profile object isnt available
        const token = res?.tokenId;
        try {
            dispatch({ type: "AUTH", data: { newUser, token } });
            history.push("/")
            


        } catch (error) {
            console.log(error)

        }
    }

    const gooleFailure = (error) => {
        console.log(error)
        console.log("Google sign in was unsuccessful. Try again");
    }


    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">{isSignup ? "sign up" : "Sign in"}</Typography>
                    <form onSubmit={handleSubmit} className={classes.form} autoComplete="false">
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} half />


                                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                    </>
                                )
                            }

                            <Input name="email" label="Email Adress" handleChange={handleChange} type="email" />

                            <Input name="password" label=" Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name="confirmPassword" label="Repeat password" handleChange={handleChange} type="password" />}


                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? "sign up" : "Log in"}
                        </Button>
                        <GoogleLogin
                            clientId="468617459997-dur5btd9lucgmoisnpaledt1meaieqdb.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick}
                                    disabled={renderProps.disabled} startIcon={<Icon />} variant="contained"> Google Sign In</Button>
                            )}
                            onSuccess={gooleSuccess}
                            onFailure={gooleFailure}
                            cookiePolicy="single_host_origin"
                        />

                        <Grid container justifyContent="flex-end">
                            <Grid item="true">
                                <Button onClick={swithMode}>
                                    {isSignup ? "already have an account? sign in " : "Don't have an account? sign up"}
                                </Button>




                            </Grid>

                        </Grid>

                    </form>


                </Paper>

            </Container>



        </div>
    )
}

export default Auth
