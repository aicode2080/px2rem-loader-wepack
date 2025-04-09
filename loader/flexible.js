(function flexible(window, document) {
  const docEle = document.documentElement;
  const dpr = window.devicePixelRatio || 1;
  /**
   * 设置文档 body 元素的字体大小
   * 如果 body 元素已存在,直接设置其 fontSize 样式为 12 * dpr
   * 如果 body 元素不存在,添加 DOMContentLoaded 事件监听器,等待 DOM 加载完成后再设置
   * @private
   */
  function setBodySize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodySize);
    }
  }
  setBodySize();
  /**
   * 设置 rem 单位基准值
   * 将页面宽度分成 10 份，每份作为 1rem 的基准值
   * 根据当前设备屏幕宽度动态计算并设置 html 元素的 font-size
   * @private
   */
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

  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
})(window, document);
