DROP TABLE IF EXISTS bnbs_students;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS bnbs;

CREATE TABLE students(
  student_id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE bnbs(
  bnb_id INTEGER PRIMARY KEY,
  name TEXT
);

-- lookup table for bnb and student tables. We will be able to join on this table in order to get the names of the student or build and burn.
CREATE TABLE bnbs_students(
  bnb_id INTEGER,
  student_id INTEGER,
  FOREIGN KEY(bnb_id) REFERENCES bnbs(bnb_id),
  FOREIGN KEY(student_id) REFERENCES students(student_id),
  url TEXT
);

--there are 3 different build and burns that have been assigned
INSERT into bnbs(bnb_id, name) values (10,'A');
INSERT into bnbs(bnb_id, name) values (11,'B');
INSERT into bnbs(bnb_id, name) values (12,'C');

--there are 4 different students in class
INSERT into students(student_id, name) values (200,'Sarah');
INSERT into students(student_id, name) values (201,'Lola');
INSERT into students(student_id, name) values (202,'Min');
INSERT into students(student_id, name) values (203,'Suzie');

-- student 200 did all the assignments
INSERT into bnbs_students(bnb_id,student_id) values (10, 200);
INSERT into bnbs_students(bnb_id,student_id) values (11, 200);
INSERT into bnbs_students(bnb_id,student_id) values (12, 200);

-- student 201 only did 10 and 11
INSERT into bnbs_students(bnb_id,student_id) values (10, 201);
INSERT into bnbs_students(bnb_id,student_id) values (11, 201);

-- student 202 did none

-- student 203 only did 12
INSERT into bnbs_students(bnb_id,student_id) values (12, 203);

-- I ultimately want to see all build and burns that still need to be turned in by student(s) and who the students are. First get a table of all possible combinations (this is what it would look like in a perfect world - all students have turned in all bnbs) then remove the items that exist in my bnbs_students lookup table(this represents all bnbs that have been turned in) to find out which ones are still outstanding.
SELECT bnbs.bnb_id, students.student_id FROM bnbs,students
EXCEPT
SELECT bnbs_students.bnb_id, bnbs_students.student_id FROM bnbs_students;

-- Cool, but the numbers don't mean a whole lot to me. I want to see names.

-- I can do this using the technique above and then joining on the bnb and student tables to add the name columns. To use EXCEPT I have to start out with tables that have identical column names. So, select just the id columns from the bnb and student tables and then remove (EXCEPT) the rows that match results from the bnbs_students table (where you only selected the bnb_id and student_id columns).  Join these results on the bnb table to get the bnb name and join on the student table to get the student name in the final results.
SELECT
  bnbs.name AS BnBs_Name,
  students.name AS Students_Name
FROM
  (SELECT bnbs.bnb_id, students.student_id
   FROM bnbs,students
   EXCEPT
   SELECT bnbs_students.bnb_id, bnbs_students.student_id
   FROM bnbs_students
 ) AS missingcombos
JOIN bnbs
ON bnbs.bnb_id = missingcombos.bnb_id
JOIN students
ON students.student_id = missingcombos.student_id
ORDER BY bnbs.name;

--  Alternatively I can solve this by using a left join. Select the id and name columns bnb and student tables and perform a left join with the bnbs_students table (note that I am joining on both the student id and the bnb id) and restrict to only records where the bnb_id from the student table is null.
SELECT allcombos.bnb_name, allcombos.student_name
FROM (
  (SELECT bnbs.bnb_id,students.student_id, bnbs.name AS bnb_name, students.name AS student_name
    FROM bnbs,students) AS allcombos
  LEFT JOIN bnbs_students
  ON bnbs_students.student_id = allcombos.student_id
  AND bnbs_students.bnb_id = allcombos.bnb_id
)
WHERE bnbs_students.bnb_id IS NULL
ORDER BY allcombos.bnb_id;
