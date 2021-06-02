import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';
import ReactGA from 'react-ga';

import actions from 'store/search/actions';

import css from './Search.css';

const Search = ({ className, handleSearchInput, handleCategoryChange }) => {
  const [category, setCategory] = useState('name');

  function onTextChange(event) {
    const { value } = event.currentTarget;
    ReactGA.event({
      category: 'Search',
      action: 'Typing Search',
      label: value
    });
    handleSearchInput(event);
  }

  function onCategoryChange(event) {
    const { value } = event.currentTarget;
    ReactGA.event({
      category: 'Search',
      action: 'Category change',
      label: value
    });
    setCategory(value);
    handleCategoryChange(value);
  }

  return (
    <section className={classNames(css.root, className)}>
      <div className={css.container}>
        <h3 className={css.header}>Know your users</h3>
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
            onChange={onTextChange}
          />
        </label>

        <section className={css.categories}>
          <label htmlFor="name" className={css.radioInput}>
            <input
              id="name"
              type="radio"
              name="category"
              value="name"
              checked={category === 'name'}
              onChange={onCategoryChange}
            />
            <span>Name</span>
          </label>
          <label htmlFor="email" className={css.radioInput}>
            <input
              id="email"
              type="radio"
              name="category"
              value="email"
              checked={category === 'email'}
              onChange={onCategoryChange}
            />
            <span>e-mail</span>
          </label>
          <label htmlFor="username" className={css.radioInput}>
            <input
              id="username"
              type="radio"
              name="category"
              value="username"
              checked={category === 'username'}
              onChange={onCategoryChange}
            />
            <span>Username</span>
          </label>
          <label htmlFor="company" className={css.radioInput}>
            <input
              id="company"
              type="radio"
              name="category"
              value="company.name"
              checked={category === 'company.name'}
              onChange={onCategoryChange}
            />
            <span>Company</span>
          </label>
        </section>
      </div>
    </section>
  );
};

Search.defaultProps = {
  className: undefined
};

Search.propTypes = {
  className: PropTypes.string,
  handleSearchInput: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired
};

export default connect(null, actions)(Search);
