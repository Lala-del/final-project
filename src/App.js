import React, {useEffect} from "react";
import './styles/App.scss'
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer"
import Features from './components/Features'
import Support from "./components/Support";
import {loadUser} from "./store/actions/authAction";
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp";


function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadUser())
  },[dispatch])

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact>
              <Home/>
            </Route>
            <Route path="/features" component={Features} >
              <Features/>
            </Route>
            <Route path="/support" component={Support} >
              <Support/>
            </Route>
            <Route path="/signin" component={SignIn}>
              <SignIn/>
            </Route>
            <Route path="/signup" component={SignUp}>
              <SignUp/>
            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;


