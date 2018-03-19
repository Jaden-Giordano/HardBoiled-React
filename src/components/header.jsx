import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'parket/react';

@connect
class Header extends React.Component {
  render() {
    const { store, head, content } = this.props;

    return (
      <div>
        <h1>{head}</h1>
        <span>User is {store.authenticated ? '' : 'not '}authenticated.</span>
        <p>{content}</p>
      </div>
    );
  }
}


Header.propTypes = {
  store: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  head: PropTypes.string,
  content: PropTypes.string,
};

Header.defaultProps = {
  store: {},
  head: 'Hardboiled React',
  content: 'A simple ReactJS boilerplate',
};

export default Header;
