const loaderUtils = require('loader-utils');
const Px2rem = require('./px2rem');
function loader(source) {
  const options = loaderUtils.getOptions(this);
  const px2remCss = new Px2rem(options);
  targetSource = px2remCss.generateRem(source);
  return targetSource;
}

module.exports = loader;
