import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Description from "./pages/description";
import * as ROUTES from "./constants/routes";


export function App() {
    return (
        
      <Router>
        <Switch>
          <Route path={ROUTES.DESCRIPTION}>
            <Description />
          </Route>
          <Route path={ROUTES.HOME} exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    );

}
