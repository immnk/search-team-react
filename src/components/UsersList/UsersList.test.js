import React from 'react';
import { shallow } from 'enzyme';

import UsersList from './UsersList';

const renderUsersList = (props) => {
  const defaultProps = {
    className: 'my-classname',
    fetchUsersFromBackend: () => {},
    loading: false,
    hasData: true,
    data: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442'
      }
    ]
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
