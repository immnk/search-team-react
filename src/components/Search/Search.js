import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';

import actions from 'store/search/actions';

import css from './Search.css';

const Search = ({ className, handleSearchInput }) => {
  return (
    <section className={classNames(css.root, className)}>
      <div className={css.container}>
        <h3 className={css.header}>User Directory</h3>
        <label htmlFor="search" className={css.searchInput}>
          <span className={classNames('material-icons', css.searchIcon)}>person_search</span>
          <input
            id="search"
            type="search"
            placeholder="Search user here..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            onChange={handleSearchInput}
          />
        </label>
      </div>
    </section>
  );
};

Search.defaultProps = {
  className: undefined
};

Search.propTypes = {
  className: PropTypes.string,
  handleSearchInput: PropTypes.func.isRequired
};

export default connect(null, actions)(Search);
