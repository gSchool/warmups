# In this warmup, you'll be given an integer of range 0 <= x <= 99 
# and have to return that number spelt out in English. A few examples:

# nameThatNumber(4)   // returns "four"
# nameThatNumber(19)  // returns "nineteen"
# nameThatNumber(99)  // returns "ninety nine"
# Words should be seperated by only spaces and not hyphens. 
# No need to validate parameters, they will always be in the 
# range [0, 99]. Make sure that the returned String has no 
# leading of trailing spaces. Good luck!


WORDS = (
    (90, 'ninety'), (80, 'eighty'), (70, 'seventy'), (60, 'sixty'),
    (50, 'fifty'), (40, 'forty'), (30, 'thirty'), (20, 'twenty'),
    (19, 'nineteen'), (18, 'eighteen'), (17, 'seventeen'), (16, 'sixteen'),
    (15, 'fifteen'), (14, 'fourteen'), (13, 'thirteen'), (12, 'twelve'),
    (11, 'eleven'), (10, 'ten'), (9, 'nine'), (8, 'eight'), (7, 'seven'),
    (6, 'six'), (5, 'five'), (4, 'four'), (3, 'three'), (2, 'two'), (1, 'one')
)


def name_that_number(num):
    result = []
    for word_value, word_name in WORDS:
        quo, num = divmod(num, word_value)
        if quo:
            result.append(word_name)
    return ' '.join(result) or 'zero'