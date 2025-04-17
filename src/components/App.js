import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"; // CORRECT import path
import ItemList from "../pages/ItemList";
import ItemDetail from "../pages/ItemDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ItemList} />
          <Route path='/items/:id' component={ItemDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
