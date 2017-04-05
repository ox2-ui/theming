import React from 'react';

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
  'highlight',
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
      Available color names:
      <div style={styles.wrapper}>
        {colors.map((item, i) => {
          return (
            <div key={i} style={styles.box}>
              <div
                className={`color:${item}`}
                style={styles.swatch}
              />
              <div style={styles.label}>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePreview;
