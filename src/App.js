import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home.js'
import Delete from './Components/Delete/Delete.js'
import Form from './Components/Form/Form.js'
import {OrderProvider} from './Components/OrderContext/OrderContext.js'
import {ProductProvider} from './Components/ProductContext/ProductContext.js'

function App() {
  return (
    <OrderProvider>
      <ProductProvider>
    <div className="App">
      <Router>
        <Switch>
        <Route path = "/form/basicdata">
            <Form/>
          </Route>
        <Route path = "/delete/:Order_id">
            <Delete/>
          </Route>
          <Route path = "/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
    </ProductProvider>
    </OrderProvider>
  );
}

export default App;
