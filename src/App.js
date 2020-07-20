import Dashboard from './components/Dashboard';
import React, { Component } from 'react';
import appStore from './redux/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(appStore);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
