import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from '..';
import { Wrapper } from '../styles';

describe('Component: Tooltip', () => {
  const minProps = {
    title: 'title',
    show: false,
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for title and show', () => {
    const wrapper = shallow(<Tooltip {...minProps} />);

    expect(wrapper.find(Wrapper).props()['data-tooltip']).toBeDefined();
    expect(wrapper.find(Wrapper).props().show).toBeDefined();
  });
});
