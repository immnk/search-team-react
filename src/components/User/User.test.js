import React from 'react';
import { shallow } from 'enzyme';

import User from './User';

const renderUser = (props) => {
  const defaultProps = {
    className: 'my-classname'
  };

  return <User {...defaultProps} {...props} />;
};

const shallowRenderUser = (props) => shallow(renderUser(props));

describe('Test User', () => {
  it('render app', () => {
    const actual = shallowRenderUser();
    expect(actual).toMatchSnapshot();
  });
});
