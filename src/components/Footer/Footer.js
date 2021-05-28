import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './Footer.css';

const Footer = ({ className }) => {
  return (
    <section className={classNames(css.root, className)}>
      <div className={css.container}>
        <h3 className={css.header}>Footer is here!</h3>
        <p className={css.description}>Some description is here</p>
      </div>
    </section>
  );
};

Footer.defaultProps = {
  className: undefined
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
