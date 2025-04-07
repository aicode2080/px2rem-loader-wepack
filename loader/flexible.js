(function flexible(window, document) {
  const docEle = document.documentElement;
  const dpr = window.devicePixelRatio || 1;
  function setBodySize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodySize);
    }
  }
  setBodySize();
  function setUnitRem() {
    const rem = docEle.clientWidth / 10;
    docEle.style.fontSize = rem + 'px';
  }
  window.addEventListener('resize', setUnitRem);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setUnitRem();
    }
  });
  setUnitRem();
})(window, document);
