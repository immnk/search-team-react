import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';

import User from 'components/User';
import actions from 'store/search/actions';

import css from './UsersList.css';

const UsersList = ({ className, search, loading, hasData, data, fetchUsersFromBackend }) => {
  useEffect(() => {
    fetchUsersFromBackend();
  }, []);

  function renderUsers() {
    return data.length > 0 ? (
      <section className={css.users}>
        {data.map((user) => {
          return search === '' || user.name.indexOf(search) > -1 ? (
            <User key={user.id} user={user} />
          ) : (
            false
          );
        })}
      </section>
    ) : (
      <p>No users present</p>
    );
  }

  return (
    <section className={classNames(css.root, className)}>
      <div className={css.container}>
        {loading ? <p>Loading...</p> : false}
        {hasData ? renderUsers() : false}
      </div>
    </section>
  );
};

UsersList.defaultProps = {
  className: undefined,
  search: '',
  loading: false,
  hasData: false,
  data: []
};

UsersList.propTypes = {
  className: PropTypes.string,
  search: PropTypes.string,
  loading: PropTypes.bool,
  hasData: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchUsersFromBackend: PropTypes.func.isRequired
};

const mapStateToProps = ({ search: { search, loading, hasData, error, errorMessage, data } }) => ({
  search,
  loading,
  hasData,
  error,
  errorMessage,
  data
});

export default connect(mapStateToProps, actions)(UsersList);
