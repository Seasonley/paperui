var blurclick = {
  bind(el, { value: callback }) {
    var ownClicked;
    function checkBlur() {
      if (!ownClicked) {
        document.removeEventListener("click", checkBlur);
        callback(el);
      } else {
        ownClicked = false;
      }
    }
    el.addEventListener("click", function() {
      ownClicked = true;
      document.addEventListener("click", checkBlur);
    });
  }
};
export default blurclick;
