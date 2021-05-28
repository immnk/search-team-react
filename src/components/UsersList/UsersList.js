import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './UsersList.css';

const UsersList = ({ className }) => {
  return (
    <section className={classNames(css.root, className)}>
      <div className={css.container}>
        <h3 className={css.header}>UsersList is here!</h3>
        <p className={css.description}>Some description is here</p>
      </div>
    </section>
  );
};

UsersList.defaultProps = {
  className: undefined
};

UsersList.propTypes = {
  className: PropTypes.string
};

export default UsersList;
