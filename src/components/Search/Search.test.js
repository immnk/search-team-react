import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

const renderSearch = (props) => {
  const defaultProps = {
    className: 'my-classname'
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
