const css = require('css');
const pxRegExp = /\b(\d+(\.\d+)?)px\b/;
class Px2rem {
  constructor(config) {
    this.config = config;
  }
  generateRem(cssText) {
    let _self = this;
    if (this.config.exclude && this.config.exclude.test(cssText)) {
      return cssText;
    }
    function processRules(rules) {
      for (let index = 0; index < rules.length; index++) {
        let rule = rules[index];
        let declarations = rule.declarations;
        for (let j = 0; j < declarations.length; j++) {
          let declaration = declarations[j];
          if (
            declaration.type === 'declaration' &&
            pxRegExp.test(declaration.value)
          ) {
            declaration.value = _self.px2remReplace('rem', declaration.value);
          }
        }
      }
    }
    var parseCss = css.parse(cssText);
    processRules(parseCss.stylesheet.rules);
    return css.stringify(parseCss);
  }
  px2remReplace(type, value) {
    const { remUnit = 75, remPrecision = 8 } = this.config;
    return value.replace(pxRegExp, (_, $1) => {
      const val = (parseFloat($1) / remUnit).toFixed(remPrecision);
      return val + type;
    });
  }
}

module.exports = Px2rem;
