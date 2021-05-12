import React from 'react';
import Create from '../Create/Create.js'
import Basicdata from '../Basicdata/Basicdata'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {OrderProvider} from '../OrderContext/OrderContext.js'

const Form = () => {
    return (
      <OrderProvider>
        <div>
        <Router>
        <Create/>
        <Switch>
          <Route  path = "/form/basicdata">
            <Basicdata/>
          </Route>
        </Switch>
      </Router>
        </div>
      </OrderProvider>
    );
};

export default Form;