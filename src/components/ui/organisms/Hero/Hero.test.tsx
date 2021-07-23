import React from 'react';
import { shallow } from 'enzyme';

import Hero from './Hero';

describe('Organisms/Hero', () => {
  def('props', () => ({ codename: 'test' }));

  def('subject', () => {
    const wrapper = shallow(<Hero {...$.props} />);

    return toJSON(wrapper);
  });

  it('renders hero with codename', () => {
    expect($.subject).toMatchSnapshot();
  });
});
