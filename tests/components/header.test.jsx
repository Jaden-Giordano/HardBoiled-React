import test from 'ava';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'parket/react';

import headless from '../helpers/headless';

import Storage from '../../src/storage';
import Header from '../../src/components/header';

configure({ adapter: new Adapter() });

const head = 'title';
const content = 'content';

test.before(headless);

test('renders the component', (t) => {
  const wrapper = mount((
    <Provider store={Storage()}>
      <Header id="whole" content={content} />
    </Provider>
  ));

  t.not(wrapper.find('Header').length, 0);
});

test('renders head', (t) => {
  const wrapper = mount((
    <Provider store={Storage()}>
      <Header id="head" head={head} />
    </Provider>
  ));

  t.true(wrapper.contains(<h1>{head}</h1>));
});

test('renders content', (t) => {
  const wrapper = mount((
    <Provider id="content" store={Storage()}>
      <Header content={content} />
    </Provider>
  ));

  t.true(wrapper.contains(<p>{content}</p>));
});
