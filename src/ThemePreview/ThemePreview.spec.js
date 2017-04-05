/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ThemePreview from './ThemePreview';
import { assert } from 'chai';

describe('ThemePreview', () => {
  it('should render a <ThemePreview> element', () => {
    const wrapper = shallow(<ThemePreview />);
    assert.strictEqual(
      wrapper.type(),
      'div',
      'should be a <div>',
    );
  });
});
