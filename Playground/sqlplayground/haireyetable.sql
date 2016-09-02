-- LEFT JOIN is equivalent to LEFT OUTER JOIN
-- RIGHT JOIN is equivalent to RIGHT OUTER JOIN
-- FULL JOIN is equivalent to FULL OUTER JOIN
-- JOIN is equivalent to INNER JOIN
-- http://stackoverflow.com/questions/406294/left-join-and-left-outer-join-in-sql-server

DROP TABLE IF EXISTS hair;
DROP TABLE IF EXISTS eyes;

CREATE TABLE hair(
  hairid    INTEGER PRIMARY KEY,
  haircolor TEXT,
  username TEXT UNIQUE
);

CREATE TABLE eyes(
  eyeid INTEGER PRIMARY KEY,
  eyecolor TEXT,
  username TEXT UNIQUE
);


INSERT into hair(hairid, haircolor, username) values (1,'brown','Allison');
INSERT into hair(hairid, haircolor, username) values (2,'pink','Blonnie');
INSERT into hair(hairid, haircolor, username) values (3,'brown','Corrine');
INSERT into hair(hairid, haircolor, username) values (4,'blonde','Dean');
INSERT into hair(hairid, haircolor, username) values (5,'blonde','Edward');

INSERT into eyes(eyeid, eyecolor, username) values (1,'green','Blonnie');
INSERT into eyes(eyeid, eyecolor, username) values (2,'blue','Corrine');
INSERT into eyes(eyeid, eyecolor, username) values (3,'brown','Allison');
INSERT into eyes(eyeid, eyecolor, username) values (4,'brown','Dean');
INSERT into eyes(eyeid, eyecolor, username) values (5,'brown','Ellis');

-- everyone who has both eye and hair color listed
SELECT COALESCE(hair.username, eyes.username) AS username,hair.haircolor, eyes.eyecolor
FROM hair
JOIN eyes
ON hair.username = eyes.username;

SELECT hair.username, eyes.username,hair.haircolor, eyes.eyecolor
FROM hair
NATURAL JOIN eyes;

--everyone in both lists
SELECT COALESCE(hair.username, eyes.username) AS username,hair.haircolor, eyes.eyecolor
FROM hair
FULL OUTER JOIN eyes
ON hair.username = eyes.username;

-- everyone who has a hair color listed
SELECT COALESCE(hair.username, eyes.username) AS username,hair.haircolor, eyes.eyecolor
FROM hair
LEFT JOIN eyes
ON hair.username = eyes.username;

-- everyone who has an eye color listed
SELECT COALESCE(hair.username, eyes.username) AS username,hair.haircolor, eyes.eyecolor
FROM hair
RIGHT JOIN eyes
ON hair.username = eyes.username;

-- who do we still need an eye color for? We can't find this out by the eye table alone. We need to join the hair and eye tables to get the data we require.
SELECT COALESCE(hair.username, eyes.username) AS username,hair.haircolor, eyes.eyecolor
FROM hair
LEFT JOIN eyes
ON hair.username = eyes.username
WHERE eyes.eyecolor IS NULL;

-- who do we still need hair color for?
SELECT COALESCE(hair.username, eyes.username) AS username,hair.haircolor, eyes.eyecolor
FROM hair
RIGHT JOIN eyes
ON hair.username = eyes.username
WHERE hair.haircolor IS NULL;
