/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ThemePreview from './ThemePreview';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <ThemePreview />
  );

  expect(wrapper).toMatchSnapshot();
});
