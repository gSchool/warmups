# We're All Hackers!

Hacking is about finding vulnerabilities in software. As engineers, our duty to our users and our companies is to be anti-hackers. In order to prevent breaches, we must understand breaches. This warmup is about a well known vulnerability in JavaScript.

Do not change the code of `server.js` for this warmup.

You do need to `npm install express`.

## Step 1: Understand the code

`server.js` is a very simple web-server with a very large security flaw. First try running the server and reading the code. Decide what this server is meant to do, and understand how it works. Once you understand the intent, understand how it's working. If you encounter code you have not seen before, or are having trouble understanding use the internet, or write another small scratch program to test the code you don't understand.

## Step 2: Identify the flaw

There is exactly one line of code that opens up the security risk in this example. Which line is it? Why is it dangerous?

## Step 3: Exploit

Now that you know where the flaw is, how could we exploit it? Try do cause the webserver to do the following things __without changing the code in `server.js`__:

1. Kill the server. You might be able to do this by causing an error, or you might need to be more clever. Try googling: "exit a node js process".
1. Send a GET request that causes the information in secretText.txt to be sent to the browser.
1. Send a GET request that causes the information in secretText.txt to change.

With this particular exploit, the possibilities for what CAN be done are essentially limitless. For an extra special bonus, try to send a GET request that causes a new route to be registered on `server.js` without restarting the server!
