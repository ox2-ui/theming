/**
 * Generates css rules from a given theme
 * @param   {Object} theme Theme object with color titles (key) and color values (value)
 * @return  {Object}       Generated rules object that can be used in jss
 */
const creteRulesForColors = (theme) => {
  const keys = Object.keys(theme);
  const rules = {};

  for (const item of keys) {
    const colorTitle = item.replace(/_/g, '-');
    const colorValue = theme[item];
    Object.assign(rules, {
      [`.color\\:${colorTitle}`]: {
        'background-color': `${colorValue} !important`,
      },
      [`.text-color\\:${colorTitle}`]: {
        color: `${colorValue} !important`,
      },
      [`.border-color\\:${colorTitle}`]: {
        'border-color': `${colorValue} !important`,
      },
      [`.fill-color\\:${colorTitle}`]: {
        fill: `${colorValue} !important`,
      },
      // Legacy oo-toggle support
      [`.oo-toggle.theme\\:${colorTitle} input:checked + .oo-toggle-track`]: {
        'border-color': colorValue,
        'background-color': colorValue,
      },
      // Legacy buttons support
      [`[data-btn~="${colorTitle}"]`]: {
        'background-color': colorValue,
      },
      [`[data-btn~="${colorTitle}"][data-btn~="outline"]`]: {
        'background-color': 'inherit',
        'border-color': colorValue,
        color: colorValue,
      },
      [`[data-btn~="${colorTitle}"][data-btn~="transparent"]`]: {
        'background-color': 'hsla(0, 0%, 0%, 0)',
        color: colorValue,
      },
    });
  }
  return rules;
};

export default creteRulesForColors;
