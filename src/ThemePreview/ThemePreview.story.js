import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ThemePreview from './ThemePreview';
import ThemeLoader from '../ThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';

storiesOf('ThemePreview', module).add('theme spark', () => (
  <div>
    <ThemeLoader theme={theme} />
    <ThemePreview />
  </div>
));
