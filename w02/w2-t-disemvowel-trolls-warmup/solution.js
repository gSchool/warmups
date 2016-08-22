function antiTroll (string) {
  return string.replace(/[aeiou]/gi, '');
}

module.exports = {
  antiTroll: antiTroll
}

