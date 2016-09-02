DROP TABLE IF EXISTS bnb_student;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS bnb;

CREATE TABLE student(
  studentid    INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE bnb(
  bnbid    INTEGER PRIMARY KEY,
  name TEXT
);

-- lookup table for bnb and student tables. We will be able to join on this table in order to get the names of the student or build and burn.
CREATE TABLE bnb_student(
  bnbid INTEGER,
  studentid INTEGER,
  FOREIGN KEY(bnbid) REFERENCES bnb(bnbid),
  FOREIGN KEY(studentid) REFERENCES student(studentid),
  url TEXT
);

--there are 3 different build and burns that have been assigned
INSERT into bnb(bnbid, name) values (10,'A');
INSERT into bnb(bnbid, name) values (11,'B');
INSERT into bnb(bnbid, name) values (12,'C');

--there are 4 different students in class
INSERT into student(studentid, name) values (200,'Sarah');
INSERT into student(studentid, name) values (201,'Lola');
INSERT into student(studentid, name) values (202,'Min');
INSERT into student(studentid, name) values (203,'Suzie');

-- student 200 did all the assignments
INSERT into bnb_student(bnbid,studentid) values (10, 200);
INSERT into bnb_student(bnbid,studentid) values (11, 200);
INSERT into bnb_student(bnbid,studentid) values (12, 200);

-- student 201 only did 10 and 11
INSERT into bnb_student(bnbid,studentid) values (10, 201);
INSERT into bnb_student(bnbid,studentid) values (11, 201);

-- student 202 did none

-- student 203 only did 12
INSERT into bnb_student(bnbid,studentid) values (12, 203);

-- I ultimately want to see all build and burns that still need to be turned in by student(s) and who the students are. First get a table of all possible combinations (this is what it would look like in a perfect world - all students have turned in all bnbs) then remove the items that exist in my bnb_student lookup table(this represents all bnbs that have been turned in) to find out which ones are still outstanding.
SELECT bnb.bnbid, student.studentid FROM bnb,student
EXCEPT
SELECT bnb_student.bnbid, bnb_student.studentid FROM bnb_student;

-- Cool, but the numbers don't mean a whole lot to me. I want to see names.

-- I can do this using the technique above and then joining on the bnb and student tables to add the name columns. To use EXCEPT I have to start out with tables that have identical column names. So, select just the id columns from the bnb and student tables and then remove (EXCEPT) the rows that match results from the bnb_student table (where you only selected the bnbid and studentid columns).  Join these results on the bnb table to get the bnb name and join on the student table to get the student name in the final results.
SELECT
  bnb.name AS BnB_Name,
  student.name AS Student_Name
FROM
  (SELECT bnb.bnbid, student.studentid
   FROM bnb,student
   EXCEPT
   SELECT bnb_student.bnbid, bnb_student.studentid
   FROM bnb_student
 ) AS missingcombos
JOIN bnb
ON bnb.bnbid = missingcombos.bnbid
JOIN student
ON student.studentid = missingcombos.studentid
ORDER BY bnb.name;

--  Alternatively I can solve this by using a left join. Select the id and name columns bnb and student tables and perform a left join with the bnb_student table (note that I am joining on both the student id and the bnb id) and restrict to only records where the bnb_id from the student table is null.
SELECT allcombos.bnbname, allcombos.studentname
FROM (
  (SELECT bnb.bnbid,student.studentid, bnb.name AS bnbname, student.name AS studentname
    FROM bnb,student) AS allcombos
  LEFT JOIN bnb_student
  ON bnb_student.studentid = allcombos.studentid
  AND bnb_student.bnbid = allcombos.bnbid
)
WHERE bnb_student.bnbid IS NULL
ORDER BY allcombos.bnbid;
