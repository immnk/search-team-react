import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';

import User from 'components/User';
import actions from 'store/search/actions';
import NoUserFoundImage from './no_results.png';

import css from './UsersList.css';

const UsersList = ({
  className,
  search,
  category,
  loading,
  hasData,
  data,
  fetchUsersFromBackend
}) => {
  useEffect(() => {
    fetchUsersFromBackend();
  }, []);

  function renderUsers() {
    const filteredUsers = data.filter((user) => {
      // if (search === '' && category === '') {
      //   return true;
      // }

      const regExp = new RegExp(search, 'i');
      return regExp.test(user[category]);
    });

    // user.name.toLowerCase().indexOf(search.toLowerCase()) > -1

    return filteredUsers.length > 0 ? (
      <section className={css.users}>
        {filteredUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </section>
    ) : (
      <figure className={css.noUser}>
        <img src={NoUserFoundImage} alt="User not found" />
        <figcaption>No users found containing {search}</figcaption>
      </figure>
    );
  }

  function renderData() {
    return data.length > 0 ? renderUsers() : <p>No users present</p>;
  }

  return (
    <section className={classNames(css.root, className)}>
      <div className={css.container}>
        {loading ? <p>Loading...</p> : false}
        {hasData ? renderData() : false}
      </div>
    </section>
  );
};

UsersList.defaultProps = {
  className: undefined,
  category: '',
  search: '',
  loading: false,
  hasData: false,
  data: []
};

UsersList.propTypes = {
  className: PropTypes.string,
  search: PropTypes.string,
  category: PropTypes.string,
  loading: PropTypes.bool,
  hasData: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchUsersFromBackend: PropTypes.func.isRequired
};

const mapStateToProps = ({
  search: { search, category, loading, hasData, error, errorMessage, data }
}) => ({
  search,
  category,
  loading,
  hasData,
  error,
  errorMessage,
  data
});

export default connect(mapStateToProps, actions)(UsersList);
