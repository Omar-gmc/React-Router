import React from "react";
import { Redirect, BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login, { fakeAuth } from "./components/Login";
import Category from "./components/Category";

import Products from "./components/Products";
import Admin from "./components/Admin";

function App(){
    return (
      <div className="App">
          <BrowserRouter>
        <NavBar/>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/products" component={Products} />
          </BrowserRouter>
  
      </div>
    );
  }


//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};



export default App;

