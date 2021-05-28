import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

const renderFooter = (props) => {
  const defaultProps = {
    className: 'my-classname'
  };

  return <Footer {...defaultProps} {...props} />;
};

const shallowRenderFooter = (props) => shallow(renderFooter(props));

describe('Test Footer', () => {
  it('render app', () => {
    const actual = shallowRenderFooter();
    expect(actual).toMatchSnapshot();
  });
});
