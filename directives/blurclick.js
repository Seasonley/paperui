import Dom from "../utils/Dom.js";

var blurclick = {
  bind(el, { value: callback }) {
    var initActived;
    function blurcheck(event) {
      var p = document.activeElement,
        isRoot = false;
      while (p) {
        if (p === el) {
          isRoot = true;
          break;
        }
        p = p.parentElement;
      }
      p = event.target;
      while (p) {
        if (p === el) {
          isRoot = true;
          break;
        }
        p = p.parentElement;
      }
      if (!initActived) {
        initActived = isRoot;
      }
      if (initActived && !isRoot) {
        initActived = undefined;
        callback(el);
      }
    }
    Dom.on("keydown", blurcheck);
    Dom.on("click", blurcheck);
  }
};
export default blurclick;
