import React from 'react';
import { Provider } from 'react-redux';

import { initSocketioConnection } from './../api/socketio';

import Routes from './../routes';
import store from './../store';

class App extends React.Component {
  UNSAFE_componentWillMount (){
    initSocketioConnection()
  }
  render() {
    return (
      <Provider store={store}>
        <Routes  />
      </Provider>
    );
  }
}

export default App;
