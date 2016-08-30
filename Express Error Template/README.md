For today’s warmup, your goal is to refactor your error handling middleware to render an error template.

- Create a new template in the views directory called `error.ejs`
- Change your `404` and `500` error handlers to render `error.ejs` with information from the error object. (err.message, err.status, err.stack, etc.)
- Use Materialize to style the page however you’d like, think of [GitHub’s 404 page](https://github.com/404) for inspiration.

Your refactored error handlers could look like this:

```js
app.use(function(_req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, _req, res, _next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
```
