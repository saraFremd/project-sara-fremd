import { Switch, Route } from "react-router-dom";
import React from "react";
import Flash from "./flash";
import Menu from "./menu";
import Page1 from "../component/page1"
import Page2 from "../component/page2"
import Page3 from "../component/page3"

export default function Routes(props) {
    return (
      <>
         <Flash> </Flash>
        <Menu></Menu>
        <Switch> 
      <Route path="/page1">
       <Page1></Page1>
          </Route>
          <Route path="/page2/:name/:age/:city/:email/:phone">
       <Page2></Page2>
          </Route>
          <Route path="/page3">
         <Page3></Page3>
          </Route>
        </Switch>
      </>
    );
  }