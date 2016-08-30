DROP TABLE IF EXISTS attendees;
DROP TABLE IF EXISTS concerts;

CREATE TABLE concerts (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL DEFAULT '',
  price numeric(8, 2) NOT NULL DEFAULT 1.00,
  started_at timestamp with time zone NOT NULL DEFAULT now(),
  ended_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE attendees (
  id serial PRIMARY KEY,
  concert_id integer NOT NULL REFERENCES concerts ON DELETE CASCADE,
  name varchar(255) NOT NULL DEFAULT '',
  age integer NOT NULL DEFAULT 0
);

CREATE INDEX ON attendees (concert_id);
