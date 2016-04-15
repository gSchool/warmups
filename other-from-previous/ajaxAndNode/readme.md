# AJAX To Your Own Server!
### ...and working with existing code

We've done AJAX requests previously. As a refersher, AJAX stands for Asynchronous Javascript and XML, but modern web-developers have largely abandoned XML in favor of JSON, and should really call AJAX AJAJ instead. 

It's common these days to send AJAX requests to your own webserver, particularly in a Service Oriented Arcitecture. AJAX helps us avoid page loads, keeping the user in the application. It also allows developers to focus their time on a single aspect of the application at a time (building and serving data in the webserver vs controlling user behavior in the front end).

Today, the challange is to inherit some server code, and change one of the pages to use AJAX to perform a form submit, instead of causing a page load.

## The Task

Open the prompt folder and run `node server.js`. Now open your browser and go to `localhost:8000/form`. 

You should see a very simple form asking for a first and last name. When you submit this data using the Submit Query button the server responds with a brand new HTML page (page reload) containing:

```
First param: [whatverYouSubmitted]
Second param: [whateverYouSubmitted]
```

Your goal is to prevent the page from reloading, but still recieve the same data from the server. Instead of refreshing the page, you should insert the data from the server into a new DOM element under the form. 

In order to do this you're going to need to revisit your front end skills, including:

* Event binding on the form submit
* Creating an AJAX request
* You may want to install JQuery using the CDN link

## Hints on Starting

Start by identifying which route processes the requests (GET and POST) to the `/form` route. 

Once you understand how the server responds to requests on the `/form` route, identify the file(s) that needs to change in order to prevent a page load.

Remind yourself how to install JQuery using the CDN (which HTML file needs the `<script>` tag?

Google JQuery AJAX.
