Given the pokemon_list data set, in a `server.js` file, implement an Express server that renders the following `index.ejs` template when visiting `localhost:8000/pokemon`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>All Pokemon</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td>Sprite</td>
          <td>Name</td>
          <td>Pokedex Number</td>
        </tr>
      </thead>
      <tbody>

        <!-- INSERT RENDERED DATA HERE -->

      </tbody>
    </table>
  </body>
</html>
```

http://expressjs.com/en/api.html#res.render
http://expressjs.com/en/guide/using-template-engines.html

Hint: You’ll want to use a templating engine called EJS
https://www.npmjs.com/package/ejs

Then, in the same file, render a different `profile.ejs` template when visiting `localhost:8000/pokemon/:id`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Individual Pokemon</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td>Sprite</td>
          <td>Type</td>
          <td>Evolves From</td>
          <td>Pokedex Number</td>
        </tr>
      </thead>
      <tbody>

        <!-- INSERT RENDERED DATA HERE -->

      </tbody>
    </table>
  </body>
</html>
```
