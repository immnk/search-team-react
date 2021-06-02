import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

jest.mock('react-ga');

const renderSearch = (props) => {
  const defaultProps = {
    className: 'my-classname',
    handleSearchInput: () => {},
    handleCategoryChange: () => {}
  };

  return <Search {...defaultProps} {...props} />;
};

const shallowRenderSearch = (props) => shallow(renderSearch(props));

describe('Test Search', () => {
  it('render app', () => {
    const actual = shallowRenderSearch();
    expect(actual).toMatchSnapshot();
  });
});
