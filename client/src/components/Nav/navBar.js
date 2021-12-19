import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, useMediaQuery, } from "@material-ui/core";
import { useTheme } from '@mui/material/styles';
import { useHistory, Link, useLocation } from "react-router-dom";
import decode from 'jwt-decode';
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyle from "./styles";



function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const classes = useStyle();
    const history = useHistory();
    const location = useLocation();// returns a new location when an url is changed
    const dispatch = useDispatch();
    const theme = useTheme();
    const logOut = (e) => {
        dispatch({ type: "LOGOUT" });
        if(location.pathname === "/myshopping"){
            history.push("/myshopping");
        }
        else
        history.push("/");
        setUser(null);
    };
    useEffect(() => {
        const token = user?.token;
        // cheking if the token has expired
        // jwt
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }
        setUser(JSON.parse(localStorage.getItem("profile")));

    }, [location]);
    const numberCart = useSelector((state) => state.cart.numberCart); //since we are accessing store state we must add cart.numberCart
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (

        <AppBar className={isMobile ? classes.mobileAppBar : classes.appBar}>

            <Toolbar className={isMobile ? classes.mobileToolBar : classes.toolbar}>
                <div >
                    <Typography className={classes.title} component={Link} to="./"  variant="h5" align="center">sMaker</Typography>

                </div>
                <div className={classes.mainTask}>
                    <div className={classes.task}>
                        {
                            user ?
                                (<div className={isMobile ? classes.mobileProfile : classes.profile}>
                                    {/* <Typography variant='h6'>{`welcome back ${user.newUser.name}`}</Typography> */}
                                    <Avatar className={classes.avatar} alt={user.newUser.name} src={user.newUser.imageUrl}>{user.newUser.name.charAt(0)}</Avatar>
                                    <Typography className={classes.userName} variant="h4">{user.newUser.name}</Typography>
                                    <Button className={isMobile ? classes.mobileLogout : classes.logout} variant="contained" color="secondary" onClick={logOut}>Logout</Button>
                                </div>) :
                                (<Button component={Link} to={"./Auth"} variant="contained" color="primary">Sign In</Button>)

                        }
                    </div>
                    
                    <div className={isMobile ? classes.MobileContainer : classes.container}>
                        <Button component={Link} to={"./myshopping"} size="small" variant="contained"
                        className={isMobile ? classes.mobileSpan : classes.span}> <ShoppingCartIcon />{numberCart} </Button>
                    </div>
                </div>

               
               

               

            </Toolbar>


        </AppBar >



    )
}

export default Navbar
