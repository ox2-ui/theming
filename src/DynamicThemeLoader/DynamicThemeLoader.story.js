import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DynamicThemeLoader from './DynamicThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';

storiesOf(
  'DynamicThemeLoader',
  module,
).add('loader', () => <DynamicThemeLoader theme={theme} />);
