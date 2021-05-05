import React from 'react';
import Create from '../Create/Create.js'
import Basicdata from '../Basicdata/Basicdata'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const Form = () => {
    return (
        <div>
        <Router>
        <Create/>
        <Switch>
          <Route  path = "/form">
            <Basicdata/>
          </Route>
        </Switch>
      </Router>
        </div>
    );
};

export default Form;