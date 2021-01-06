import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeDashboard from './containers/Home';
import ProductsDashboard from './containers/ProductsDashboard';
import SignInMain from './containers/SignInMain';
import RegisterMain from './containers/RegisterMain';
import SingleProduct from './containers/SingleProduct';


function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={HomeDashboard} />
      <Route exact path="/products" component={ProductsDashboard} />
      <Route path="/products/:id" component={SingleProduct} />
      <Route path="/signin" component={SignInMain} />
      <Route path="/register" component={RegisterMain} />
    </Switch>
  );
}

export default Routes;