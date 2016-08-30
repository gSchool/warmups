# Knex Migrations

Using Knex, build migration files for the following one-to-many relationship.

```
              ┌───────────────────────────────────────────────────────────────┐
              │                           concerts                            │
              ├─────────────┬─────────────────────────┬───────────────────────┤
              │id           │serial                   │primary key            │
              │name         │varchar(255)             │not null default ''    │
              │price        │numeric(8, 2)            │not null default 1.00  │
              │started_at   │timestamp with time zone │not null default now() │
              │ended_at     │timestamp with time zone │not null default now() │
              └─────────────┴─────────────────────────┴───────────────────────┘
                                              ┼
                                              │
                                              │
                                              ○
                                             ╱│╲
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                        attendees                                         │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│concert_id   │integer                  │not null references concerts(id) on delete cascade│
│name         │varchar(255)             │not null default ''                               │
│age          │integer                  │not null default 0                                │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```

Ensure all primary and foreign keys have an index. Rememember to drop any existing tables from the database before creating new ones.

Once you're satisfied, feel free to add more columns to either table as you see fit.
