# User Authentication

Using the [Express HTTP server](../User Registration/), add two new route handlers to the middleware stack for logging users in and out.

First, add middleware to handle `POST /session` requests with username and password key-value pairs in the request body. Ensure this middleware takes the following steps.

- If a row with the username doesn't exists in the `users` table, respond with just a 401 status code.
- Use bcrypt to see if the password from the request matches the `hashed_password` from the selected user row.
- If the passwords don't match, respond with just a 401 status code.
- If the passwords do match, store the user's `id` in the session and respond with just a 200 status code.

Be sure to pass along any errors to the error handling middleware in the stack. For good measure, include a 404 catch-all middleware in the stack as well.

As a bonus, ensure this middleware takes the following steps.

- Respond with a 400 status code if either the username or password is blank.

Then, add middleware to handle `DELETE /session` requests. Ensure this middleware takes the following steps.

- Destroy the session.
- Respond with just a 200 status code.
