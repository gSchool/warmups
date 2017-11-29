DROP TABLE IF EXISTS cohorts;
DROP TABLE IF EXISTS subjects;

CREATE TABLE cohorts(
  cohortid    INTEGER PRIMARY KEY,
  cohortname TEXT
);
CREATE TABLE subjects(
  subjectid    INTEGER PRIMARY KEY,
  subjectname TEXT
);

INSERT into cohorts(cohortid, cohortname) values (1,'g68');
INSERT into cohorts(cohortid, cohortname) values (2, 'g62');

INSERT into subjects(subjectid, subjectname) values (1,'javascript');
INSERT into subjects(subjectid, subjectname) values (2, 'express');
INSERT into subjects(subjectid, subjectname) values (3, 'react');

SELECT * FROM cohorts,subjects;
