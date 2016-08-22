function reverseVowels (s) {
    var vowels = {'a':1, 'e':1,'i':1,'o':1,'u':1};
        var found = [];
        
        s = s.split('');
        for(var i =0; i < s.length; i++) {
            if(vowels[s[i].toLowerCase()]) {
                found.push(s[i]);
            }
        }
        for(var j =0; j < s.length; j++) {
            if(vowels[s[j].toLowerCase()]) {
                s[j]= found.pop();
            }
        }
        return s.join('');
}

module.exports = {
  reverseVowels: reverseVowels,
  attendance: 'Word up'
};