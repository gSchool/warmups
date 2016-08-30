# User Registration

Create an Express HTTP server that contains middleware to handle `POST /users` requests with `username` and `password` key-value pairs in the request body. Ensure the middleware takes the following steps.

1. Generate a `hashed_password` using the bcrypt cryptographic hash function.
2. Insert the `username` and `hashed_password` into a `users` table.
3. Respond with just a `200` status code on successful insertion into the table.

Be sure to pass along any errors to the error handling middleware in the stack. For good measure, include a `404` catch-all middleware in the stack as well.

As a bonus, ensure the middleware takes the following steps.

- Respond with a `400` status code if either the `username` or `password` is blank.
- Respond with a `400` status code if a row with the same `username` already exists in the `users` table.
