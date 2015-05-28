var countBy = function(count, by) {
  var all = [];
  for(var i = by; i <= count; i += by) {
    all.push(i);
  }
  return all;
}
