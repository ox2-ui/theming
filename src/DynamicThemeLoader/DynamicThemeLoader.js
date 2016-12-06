import { PropTypes } from 'react';
import creteRulesForColors from './creteRulesForColors';
import jss from 'jss';

let sheet = {};

/**
 * DynamicThemeLoader Component
 */
const DynamicThemeLoader = (props) => {
  const { theme } = props;

  if (sheet.detach) {
    sheet.detach();
  }
  sheet = jss.createStyleSheet(creteRulesForColors(theme), {named: false}).attach();

  return false;
};

DynamicThemeLoader.propTypes = {
  /**
   * The css class name of the root element.
   */
  theme: PropTypes.object.isRequired,
};

export default DynamicThemeLoader;
