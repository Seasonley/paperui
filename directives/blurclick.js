import Dom from "../utils/Dom.js";

var blurclick = {
  bind(el, { value: callback }) {
    var initActived;
    function blurcheck(event) {
      var p,isRoot;
      if(event.type==="keyup"&&event.key!=='Tab')return;
      if(event.type==="keyup"&&event.key==='Tab'){
        p = document.activeElement,
          isRoot = false;
        while (p) {
          if (p === el) {
            isRoot = true;
            break;
          }
          p = p.parentElement;
        }
      }else if(event.type==="click"){
        p = event.target;
        while (p) {
          if (p === el) {
            isRoot = true;
            break;
          }
          p = p.parentElement;
        }
      }
      if (!initActived&&isRoot) {
        initActived = isRoot;
      }
      if (initActived&& !isRoot) {
        initActived = false;
        callback(el);
      }
    }
    Dom.on("keyup", blurcheck);
    Dom.on("click", blurcheck);
  }
};
export default blurclick;
