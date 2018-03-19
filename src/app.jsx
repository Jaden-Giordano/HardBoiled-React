import React from 'react';

import { Provider } from 'parket/react';
import Storage from './storage';

import Header from './components/header';

function App() {
  const instance = Storage();

  return (
    <Provider store={instance}>
      <Header
        head="Hardboiled React"
        content="A simple ReactJS/Parket boilerplate containing Webpack, Sass, ES6, XO w/ Airbnb style guide, and Ava (w/ Enzyme)!"
      />
    </Provider>
  );
}

export default App;
