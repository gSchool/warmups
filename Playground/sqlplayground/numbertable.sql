-- this is a very contrived example just to show how to get the data we are looking for by using the different types of joins.

-- LEFT JOIN is equivalent to LEFT OUTER JOIN
-- RIGHT JOIN is equivalent to RIGHT OUTER JOIN
-- FULL JOIN is equivalent to FULL OUTER JOIN
-- JOIN is equivalent to INNER JOIN
-- http://stackoverflow.com/questions/406294/left-join-and-left-outer-join-in-sql-server

DROP TABLE IF EXISTS personA;
DROP TABLE IF EXISTS personB;

CREATE TABLE personA(
  idA INTEGER PRIMARY KEY,
  petnameA TEXT
);

CREATE TABLE personB(
  idB INTEGER PRIMARY KEY,
  petnameB TEXT
);


INSERT into personA(idA, petnameA) values (1,'A');
INSERT into personA(idA, petnameA) values (2,'B');
INSERT into personA(idA, petnameA) values (3,'C');
INSERT into personA(idA, petnameA) values (4,'D');

INSERT into personB(idB, petnameB) values (2,'B');
INSERT into personB(idB, petnameB) values (3,'C');
INSERT into personB(idB, petnameB) values (5,'E');

-- What Types of Joins do I need for the following?

-- I want 1,2,3,4,5 (everything from both tables) Full Join
SELECT *
FROM personA
FULL JOIN personB
ON personA.petnameA = personB.petnameB;

-- I want 1,2,3,4 (everything from personA table) Left Join
SELECT *
FROM personA
LEFT JOIN personB
ON personA.petnameA = personB.petnameB;

-- I want 1,4 (these items are only in personA table) Left Join with constraint
SELECT *
FROM personA
LEFT JOIN personB
ON personA.petnameA = personB.petnameB
WHERE personB.petnameB IS NULL;

-- I want 2,3 (these are the items common to both tables) Inner Join
SELECT *
FROM personA
INNER JOIN personB
ON personA.petnameA = personB.petnameB;

-- I want 2,3,5 (these are in personB table and they may overlap with personA table) Right Join
SELECT *
FROM personA
RIGHT JOIN personB
ON personA.petnameA = personB.petnameB;

-- I want 5 (the items that are only in the personB table) Right Join with constraint
SELECT *
FROM personA
RIGHT JOIN personB
ON personA.petnameA = personB.petnameB
WHERE personA.petnameA IS NULL;

-- I want all possible combinations of the two tables
SELECT *
FROM personA, personB;

--the above can also be done with a Cross Join
SELECT *
FROM personA
CROSS JOIN personB;
