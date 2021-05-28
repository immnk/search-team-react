import React from 'react';
import { shallow } from 'enzyme';

import UsersList from './UsersList';

const renderUsersList = (props) => {
  const defaultProps = {
    className: 'my-classname'
  };

  return <UsersList {...defaultProps} {...props} />;
};

const shallowRenderUsersList = (props) => shallow(renderUsersList(props));

describe('Test UsersList', () => {
  it('render app', () => {
    const actual = shallowRenderUsersList();
    expect(actual).toMatchSnapshot();
  });
});
