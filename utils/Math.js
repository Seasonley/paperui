var percent = (a, b) => {
  var p = 100;
  if (a < 0) p = 0;
  else if (a < b) p = Math.round(a > b ? p : (a / b) * p);
  return p;
};
var fixed = function(num, fix) {
  return parseInt(Math.round(num * Math.pow(10, fix))) / Math.pow(10, fix);
};

export { percent, fixed };
