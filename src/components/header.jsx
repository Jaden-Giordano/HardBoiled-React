import React from 'react';
import PropTypes from 'prop-types';

function Header({ head, content }) {
  return (
    <div>
      <h1>{head}</h1>
      <p>{content}</p>
    </div>
  );
}

Header.propTypes = {
  head: PropTypes.string,
  content: PropTypes.string,
};

Header.defaultProps = {
  head: 'Hardboiled React',
  content: 'A simple ReactJS boilerplate',
};

export default Header;
