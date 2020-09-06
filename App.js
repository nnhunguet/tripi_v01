import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import AppNavigation from './AppNavigation';
import { Provider } from 'react-redux'
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  )
}

export default App;