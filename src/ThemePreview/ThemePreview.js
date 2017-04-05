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
    border: '3px solid white',
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
      Background colors:
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
      Text colors:
      <div style={styles.wrapper}>
        {colors.map((item, i) => {
          return (
            <div key={i} style={styles.box}>
              <div
                className={`text-color:${item}`}
                style={styles.label}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
      Border colors:
      <div style={styles.wrapper}>
        {colors.map((item, i) => {
          return (
            <div key={i} style={styles.box}>
              <div
                className={`border-color:${item}`}
                style={styles.swatch}
              />
              <div style={styles.label}>{item}</div>
            </div>
          );
        })}
      </div>
      Fill colors:
      <div style={styles.wrapper}>
        {colors.map((item, i) => {
          return (
            <div key={i} style={styles.box}>
              <svg
                height="30"
                version="1.1"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className={`fill-color:${item}`}
                  height="30"
                  width="30"
                  x="0"
                  y="0"
                />
              </svg>
              <div style={styles.label}>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePreview;
