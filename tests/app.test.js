import test from 'ava';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/app';

enzyme.configure({ adapter: new Adapter() });

test('has a Header component', (t) => {
  const wrapper = shallow(<App />);
  t.true(wrapper.find('Header').exists());
});
