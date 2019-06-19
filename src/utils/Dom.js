var Dom = {
  on(eventName, callbackFn) {
    switch (eventName) {
      case "move":
        document.addEventListener("mousemove", callbackFn);
        break;
      case "up":
        document.addEventListener("mouseup", callbackFn);
        break;
      default:
        document.addEventListener(eventName, callbackFn);
        break;
    }
  },
  off(eventName, callbackFn) {
    switch (eventName) {
      case "move":
        document.removeEventListener("mousemove", callbackFn);
        break;
      case "up":
        document.removeEventListener("mouseup", callbackFn);
        break;
    }
  },
  clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      // IE?
      document.selection.empty();
    }
  },
  setTextPosition(tobj, spos) {
    if (spos < 0) spos = tobj.value.length;
    if (tobj.setSelectionRange) {
      //Chrome,Firefox
      setTimeout(function() {
        tobj.setSelectionRange(spos, spos);
        tobj.focus();
      }, 0);
    } else if (tobj.createTextRange) {
      //兼容IE
      var rng = tobj.createTextRange();
      rng.move("character", spos);
      rng.select();
    }
  },
  trigger(el, type) {
    try {
      //w3c
      var evt = document.createEvent("Event");
      evt.initEvent(type, true, true);
      el.dispatchEvent(evt);
    } catch (e) {
      //ie
      el.fireEvent("on" + type);
    }
  }
};

export default Dom;
