function findNb(m) {
  var n = 0;
  while (m > 0) m -= Math.pow(++n,3);
  return m ? -1 : n;
}

module.exports = {
  findNb: findNb
};