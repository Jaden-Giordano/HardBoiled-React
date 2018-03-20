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
        content="An opinionated ReactJS/Parket boilerplate containing Webpack 4, Sass, Babel 7, XO (w/ Airbnb style guide), and Ava (w/ Enzyme)!"
      />
    </Provider>
  );
}

export default App;
