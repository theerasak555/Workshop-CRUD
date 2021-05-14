import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home.js'
import Delete from './Components/Delete/Delete.js'
import Create from './Components/Create/Create'
import Edit from './Components/Edit/Edit.js'
import {OrderProvider} from './Components/OrderContext/OrderContext.js'
import {ProductProvider} from './Components/ProductContext/ProductContext.js'

function App() {
  return (
    <OrderProvider>
      <ProductProvider>
    <div className="App">
      <Router>
        <Switch>
        <Route path = "/edit/:Inform_id">
            <Edit/>
          </Route>
        <Route path = "/create">
            <Create/>
          </Route>
        <Route path = "/delete/:Inform_id">
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
