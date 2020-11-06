import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import Series from "./Series";
import Movies from "./Movies";


const Routes = () => {

  return (
    <>
    <Switch>
      <Route exact path="/series"><Series /></Route>
      <Route exact path="/movies"><Movies /></Route>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>

    </>
  )

}

export default Routes;