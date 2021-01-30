import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'


export function App() {
    <Router>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
        </Switch>
    </Router>
}
