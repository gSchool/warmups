DELETE FROM attendees;
DELETE FROM concerts;

INSERT INTO concerts (id, name, price) VALUES
(1, 'Capitol Hill Block Party 2016', 49.99),
(2, 'Bumbershoot 2016', 64.99);

SELECT setval('concerts_id_seq', (SELECT MAX(id) FROM concerts));

INSERT INTO attendees (id, concert_id, name, age) VALUES
(1, 1, 'Daniel Bailey', 52),
(2, 1, 'Heidi McGuire', 30),
(3, 2, 'Corey Reyes', 26),
(4, 2, 'Kristi Sheridan', 45);

SELECT setval('attendees_id_seq', (SELECT MAX(id) FROM attendees));
