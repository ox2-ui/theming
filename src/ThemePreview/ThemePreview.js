import React from 'react';
import DynamicThemeLoader from '../DynamicThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  box: {
    margin: '10px',
    textAlign: 'center',
  },
  swatch: {
    width: '30px',
    height: '30px',
    margin: '0 auto',
  },
  label: {
    color: 'grey',
    height: '50px',
    marginTop: '5px',
  },
};

const colors = [
  // UI Element colors
  'white',
  'item',
  'backdrop',
  'backdrop-tint',
  'item-alt',
  'backdrop-alt',
  // Neutral colors
  'neutral-tint',
  'neutral-faded',
  'neutral',
  'neutral-light',
  'neutral-dim',
  'neutral-dark',
  'dark',
  'light',
  'light-faded',
  // Status colors
  'action',
  'warning',
  'attention',
  'critical',
  'positive',
  'negative',
  // Branding colors
  'brand',
  'primary-header',
  'action-menu',
  'action-menu-items',
  'main-menu-header',
  'main-menu-items',
  'main-menu-button',
  // Social network colors
  'twitter',
  'facebook',
  'linkedin',
  'google',
];

/**
 * Default theme for docs and playground
 */
const ThemePreview = () => {
  return (
    <div>
      <DynamicThemeLoader theme={theme} />
      Available color names:
      <div style={styles.wrapper}>
        {colors.map((item, i) => {
          return (
            <div key={i} style={styles.box}>
              <div style={styles.swatch} className={`color:${item}`} />
              <div style={styles.label}>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePreview;
