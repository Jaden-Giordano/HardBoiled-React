import test from 'ava';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../../src/components/header';

enzyme.configure({ adapter: new Adapter() });

const head = 'title';
const content = 'content';

test('renders head', (t) => {
  const wrapper = shallow(<Header head={head} />);
  t.true(wrapper.contains(<h1>{head}</h1>));
});

test('renders content', (t) => {
  const wrapper = shallow(<Header content={content} />);
  t.true(wrapper.contains(<p>{content}</p>));
});
