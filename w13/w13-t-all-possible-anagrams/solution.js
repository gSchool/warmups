// Description:

// What is your favourite day of the week? Check if it's 
// the most frequent day of the week in the year.

// You are given a year as integer (e. g. 2001). You should 
// return the most frequent day(s) of the week in that year. 
// The result has to be a list of days sorted by the order of 
// days in week (e. g. ['Monday', 'Tuesday']). Week starts with Monday.

// Input: Year as an int.

// Output: The list of most frequent days sorted by the order 
// of days in week (from Monday to Sunday).

// Preconditions: Year is between 1 and 9999. Week starts with
//  Monday. Calendar is Gregorian.

// Example:

// most_frequent_days(2427) == ['Friday']
// most_frequent_days(2185) == ['Saturday']
// most_frequent_days(2860) == ['Thursday', 'Friday']

function mostFrequentDays(year){  
  let firstDay = new Date(year,0,0).getDay();
  let lastDay = new Date(year,11,30).getDay();
  
  let firstWeek = Array.from({length: 7 - firstDay}, (v, k) => firstDay + k);
  let lastWeek = new Set(Array.from({length: lastDay + 1}, (v, k) => k));
  
  console.log(firstWeek, lastWeek);
  
  // get an Array of all intersecting days
  let mostCommon = firstWeek.filter(d => lastWeek.has(d));
  
  // if there are no intersecting day, just return all
  if(mostCommon.length === 0) {
    mostCommon = [...firstWeek, ...lastWeek].sort((a, b) => a - b);
  }
  
  // now replace the indizes with the actual names
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return mostCommon.map(i => days[i]);
}

module.exports = {
 mostFrequentDays: mostFrequentDays,
 attendance: "much words" 
}