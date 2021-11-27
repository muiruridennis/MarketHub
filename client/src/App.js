import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom"
import { Container } from "@material-ui/core"

import './index.css';
import Navbar from "./components/Nav/navBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import MyShopping from "./components/myShopping/myShopping";
// import Footer from "./components/footer/footer";
import Pay from "./helpers/payment/pay"
import ItemsDetails from "./helpers/itemsDetails"

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
 
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />

        <Switch>
          <Route path="/" exact component={()=> <Redirect to="/items" />} />
          <Route path="/items" exact component={Home}/>
          <Route path="/items/search" exact component={Home}/>
          <Route path="/items/:id" exact component={ItemsDetails}/>
          <Route path="/auth" exact component={()=>(!user ? <Auth/> : <Redirect to= "/items" />)} />
          <Route path="/myshopping" exact component={MyShopping} />
          <Route path="/payment" exact component={Pay} />

        </Switch>
        {/* <Footer/> */}
      </Container>

    </Router>

  );
};

export default App;
