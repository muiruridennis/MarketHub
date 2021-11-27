import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core";
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

    const logOut = () => {
        dispatch({ type: "LOGOUT" });
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

    return (

        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.container}>
                <Typography component={Link} to="./" className={classes.headings} variant="h4" align="center">sMaker</Typography>
                <ShoppingCartIcon className={classes.shoppingCart} fontSize="large" />
                <Button component={Link} to={"./myshopping"} variant="contained" className={classes.span}> {numberCart} </Button>

            </div>

            <Toolbar className={classes.toolbar}>

                {
                    user ?
                        (<div className={classes.profile}>
                            {/* <Typography variant='h6'>{`welcome back ${user.newUser.name}`}</Typography> */}
                            <Avatar className={classes.avatar} alt={user.newUser.name} src={user.newUser.imageUrl}>{user.newUser.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6" >{user.newUser.name.toUpperCase()}</Typography>
                            <Button className={classes.logout} variant="contained" color="secondary" onClick={logOut}>Logout</Button>
                        </div>) :
                        (<Button component={Link} to={"./Auth"} variant="contained" color="primary">Sign In</Button>)

                }

            </Toolbar>


        </AppBar >



    )
}

export default Navbar
