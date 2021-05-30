import React from "react";
import Home from '../components/Home/Home'
import Consumidor from '../components/consumidor/Consumidor'
import './Router.css'
import {
  
  Switch,
  Route,
} from "react-router-dom";

export default function Rota() {
  return (
  
      <div className='router'>   

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          
          <Route path="/consumidor">
            <Consumidor />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
   
  );
}