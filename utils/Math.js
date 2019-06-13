function percent(a, b) {
  var p = 100;
  if (a < 0) p = 0;
  else if (a < b) p = Math.round(a > b ? p : (a / b) * p);
  return p;
}
function fixed(num, fix) {
  return parseInt(Math.round(num * Math.pow(10, fix))) / Math.pow(10, fix);
}

function isNumber(val) {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
}

export { percent, fixed, isNumber };
