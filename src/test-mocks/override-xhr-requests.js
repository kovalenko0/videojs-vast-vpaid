var nativeMethod = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function () {
  console.log(arguments);

  return nativeMethod.apply(this, [].slice.call(arguments));
};
