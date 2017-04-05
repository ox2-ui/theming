/**
 * Inject css rules into DOM using a generated <style> tag
 * @param  {string[]} rules Array of css rules to inject into DOM
 * @param  {string} id     Idetifier for generated style tags
 */
const injectStyle = (rules = [], id = 'default') => {
  const prefixedId = `injected-styles\:${id}`;
  const style = rules.join(' ');
  const head = document.getElementsByTagName('body')[0];
  let tag = document.getElementById(prefixedId);
  if (rules.length > 0) {
    // Create a new style tag if it doesn't exist
    if (!tag) {
      tag = document.createElement('style');
      tag.id = prefixedId;
      head.appendChild(tag);
    }
    tag.innerHTML = style;

    // Remove existing style tag if rules were cleared
  } else if (rules.length === 0 && tag) {
    head.removeChild(tag);
  }
};

export default injectStyle;
