import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../containers/history';
import Search from './../containers/search';
import LiveChart from './../components/LiveChart';
import LiveTable from './../containers/liveData';
import NotFound from './../components/NotFound';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/livechart" component={LiveChart} />
      <Route path="/livetable" component={LiveTable} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default routes;
