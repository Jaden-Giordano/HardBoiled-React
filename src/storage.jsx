/* eslint-disable no-param-reassign */

import model from 'parket';

const Storage = model('storage', {
  initial: () => ({
    authenticated: false,
  }),

  actions: state => ({
    authenticate: () => {
      state.authenticated = true;
    },
  }),
});

export default Storage;
