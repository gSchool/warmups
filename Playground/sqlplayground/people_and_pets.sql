-- LEFT JOIN is equivalent to LEFT OUTER JOIN
-- RIGHT JOIN is equivalent to RIGHT OUTER JOIN
-- FULL JOIN is equivalent to FULL OUTER JOIN
-- JOIN is equivalent to INNER JOIN
-- http://stackoverflow.com/questions/406294/left-join-and-left-outer-join-in-sql-server

DROP TABLE IF EXISTS people CASCADE;
DROP TABLE IF EXISTS pets;

CREATE TABLE people(
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE pets(
  id INTEGER PRIMARY KEY,
  people_id INTEGER references people(id),
  name TEXT
);


INSERT into people(id, name) values (1,'Alan');
INSERT into people(id, name) values (2,'Betty');
INSERT into people(id, name) values (3,'Cindy');
INSERT into people(id, name) values (4,'Domini');

INSERT into pets(id, name, people_id) values (2,'fluffy',1);
INSERT into pets(id, name, people_id) values (3,'misty',1);
INSERT into pets(id, name, people_id) values (5,'ruff',3);

-- Full Join
SELECT *
FROM people
FULL JOIN pets
ON people.id = pets.people.id;

-- Left Join
SELECT *
FROM people
LEFT JOIN pets
ON people.id = pets.people.id;

-- Left Join with constraint
SELECT *
FROM people
LEFT JOIN pets
ON people.id = pets.people.id
WHERE pets.people.id IS NULL;

-- Inner Join
SELECT *
FROM people
INNER JOIN pets
ON people.id = pets.people.id;

--  Right Join
SELECT *
FROM people
RIGHT JOIN pets
ON people.id = pets.people.id;

-- Right Join with constraint
SELECT *
FROM people
RIGHT JOIN pets
ON people.id = pets.people.id
WHERE people.id IS NULL;

-- I want all possible combinations of the two tables
SELECT *
FROM people, pets;

--the above can also be done with a Cross Join
SELECT *
FROM people
CROSS JOIN pets;
