function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num) {
    if(num <= 3) {
      str = str.slice(0,num) + '...';
    } else {
      str = str.slice(0,num-3) + '...';
    }
  }
  return str;
}

module.exports = {
  truncateString: truncateString
};