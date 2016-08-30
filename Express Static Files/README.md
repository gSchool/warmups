# Express Static Server

Today's morning warmup has two parts.

In a `server.js` file, implement an Express server that serves the following `index.html` page as a static file.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Index</title>
  </head>
  <body>
    <h2>Index</h2>
  </body>
</html>
```

http://expressjs.com/en/api.html#express.static
http://expressjs.com/en/starter/static-files.html

Then, in the same file, add a `404` catch all middleware that serves the following `404.html` page as a sent file.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>404 Not Found</title>
  </head>
  <body>
    <h2>404 Not Found</h2>
  </body>
</html>
```

http://expressjs.com/en/api.html#res.sendFile
