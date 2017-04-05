import { PropTypes } from 'react';
import injectStyle from './injectStyle';

const getColorRules = ({ title, color }) => {
  return `
.color\\:${title} {
  background-color: ${color} !important;
}
.text-color\\:${title} {
  color: ${color} !important;
}
.border-color\\:${title} {
  border-color: ${color} !important;
}
.fill-color\\:${title} {
  fill: ${color} !important;
}`;
};

const getButtonRules = ({ title, color }) => {
  return `
[data-btn~="${title}"] {
  background-color: ${color};
}
[data-btn~="${title}"][data-btn~="outline"] {
  background-color: inherit;
  color: ${color};
  border-color: ${color};
}
[data-btn~="${title}"][data-btn~="transparent"] {
  background-color: hsla(0, 0%, 0%, 0);
  color: ${color};
}`;
};

/**
 * ThemeLoader Component
 */
const ThemeLoader = ({ theme }) => {
  const keys = Object.keys(theme);
  const rules = [];
  for (const item of keys) {
    const title = item.replace(/_/g, '-');
    const color = theme[item];
    rules.push(
      `${getColorRules({ title, color })}
      ${getButtonRules({ title, color })}`,
    );
  }

  injectStyle(rules, 'theme-colors');

  return false;
};

ThemeLoader.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ThemeLoader;
