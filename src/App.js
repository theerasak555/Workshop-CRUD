import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home.js'
import Delete from './Components/Delete/Delete.js'
import Form from './Components/Form/Form.js'
import {OrderProvider} from './Components/OrderContext/OrderContext.js'

function App() {
  return (
    <OrderProvider>
    <div className="App">
      <Router>
        <Switch>
        <Route path = "/form/basicdata">
            <Form/>
          </Route>
        <Route path = "/delete/:id">
            <Delete/>
          </Route>
          <Route path = "/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
    </OrderProvider>
  );
}

export default App;
