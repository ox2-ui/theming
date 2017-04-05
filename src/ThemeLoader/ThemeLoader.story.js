import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ThemeLoader from './ThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';

storiesOf('ThemeLoader', module)
  .add('default', () => (
    <ThemeLoader theme={theme} />
  ));
