Don’t you hate it when you see an uncaughtException error pop up and crash your Node.js app?

Yeah… I feel you. Can anything be worse? Oh yeah, sorry, unhandledRejection I didn’t see you there. What a nightmare you are. 😬

I maintain all Node.js open-source repos at Sematext. A few of them can help you out with error handling, but more about that further down.

Here at Sematext, we take error handling seriously! I want to share a bit of that today.

I want to guide you through what I’ve learned so far about error handling in Node.js while working on open-source projects. Hopefully, it’ll help you improve your code, make it more robust, and ultimately help you step up your bug hunting, and help improve your general developer experience.

I don’t want you to have to stay up late and burn the midnight oil troubleshooting bugs. Ah! About that, here’s an epic song I really like!

What Is Error Handling in Node.js
I’ve heard a ton of my fellow developers say error handling in Node.js is way too hard. Well, I can’t lie. It’s not easy. But, I have to be fair and say it’s not that hard either once you set up centralized error handling.

What is an error anyhow? It’s a way to see bugs in your code. Following this logic, error handling is a way to find these bugs and solve them as quickly as humanly possible.

From this explanation, it’s obvious the hard part is setting up a good base for your error handling. It’s all about keeping you sane at the end of the day. Handling errors properly means developing a robust codebase and reducing development time by finding bugs and errors easily.

Why Do You Need Error Handling
Why? For your own sanity. You want to make bug fixing less painful. It helps you write cleaner code. It centralizes all errors and lets you enable alerting and notifications so you know when and how your code breaks.

Types of Errors: Operational vs. Programmer Errors
Would you believe me when I said not all errors are caused by humans? Don’t get me wrong, most still are, but not all of them! Errors can be Operational and Programmer errors.

Operational Errors
Operational errors represent runtime problems. These errors are expected in the Node.js runtime and should be dealt with in a proper way. This does not mean the application itself has bugs. It means they need to be handled properly. Here’s a list of common operational errors:

failed to connect to server
failed to resolve hostname
invalid user input
request timeout
server returned a 500 response
socket hang-up
system is out of memory
Programmer Errors
Programmer errors are what we call bugs. They represent issues in the code itself. Here’s a common one for Node.js, when you try reading a property of an undefined object. It’s a classic case of programmer error. Here are a few more:

called an asynchronous function without a callback
did not resolve a promise
did not catch a rejected promise
passed a string where an object was expected
passed an object where a string was expected
passed incorrect parameters in a function
Now you understand what types of errors you’ll be facing, and how they are different. Operational errors are part of the runtime and application while programmer errors are bugs you introduce in your codebase.

Now you’re thinking, why do we divide them into two categories? It’s simple really.

Do you want to restart your app if there’s a user not found error? Absolutely not. Other users are still enjoying your app. This is an example of an operational error.

What about failing to catch a rejected promise? Does it make sense to keep the app running even when a bug threatens your app? No! Restart it.

What Is an Error Object?
The error object is a built-in object in the Node.js runtime. It gives you a set of info about an error when it happens. The Node.js docs have a more in-depth explanation.

A basic error looks like this:

const error = new Error("An error message")
console.log(error.stack)
It has an error.stack field that gives you a stack trace showing where the error came from. It also lists all functions that were called before the error occurred. The error.stack field is optimal to use while debugging as it prints the error.message as well.

How Do You Handle Errors in Node.js: Best Practices You Should Follow
From my experience, there are a few best practices that will make it easier to handle errors in Node.js.

You can handle errors in callbacks. There are some serious drawbacks to using callbacks because it creates a nested “callback hell”. It’s notoriously hard to debug and fix errors if you need to look for them in nested functions.

A better way is to use async/await and try-catch statements, or .catch() errors in promises.

Let me show you what I mean.

1. Use Custom Errors to Handle Operational Errors
With the async/await pattern you can write code that looks synchronous, but actually is asynchronous.

const anAsyncTask = async () => {
 try {
 const user = await getUser()
 const cart = await getCart(user)

 return cart
 } catch (error) {
 console.error(error)
 } finally {
 await cleanUp()
 }
}
This pattern will clean up your code and avoid the dreaded callback hell.

You can use the built-in Error object in Node.js as I mentioned above, as it gives you detailed info about stack traces.

However, I also want to show you how to create custom Error objects with more meaningful properties like HTTP status codes and more detailed descriptions.

Here’s a file called baseError.js where you set the base for every custom error you’ll use.

// baseError.js

class BaseError extends Error {
 constructor (name, statusCode, isOperational, description) {
 super(description)

 Object.setPrototypeOf(this, new.target.prototype)
 this.name = name
 this.statusCode = statusCode
 this.isOperational = isOperational
 Error.captureStackTrace(this)
 }
}

module.exports = BaseError
Also create an httpStatusCodes.js file to keep a map of all status codes you want to handle.

// httpStatusCodes.js

const httpStatusCodes = {
 OK: 200,
 BAD_REQUEST: 400,
 NOT_FOUND: 404,
 INTERNAL_SERVER: 500
}

module.exports = httpStatusCodes
Then, you can create an api404Error.js file, and extend the BaseError with a custom error for handling 404s.

// api404Error.js

const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')

class Api404Error extends BaseError {
 constructor (
 name,
 statusCode = httpStatusCodes.NOT_FOUND,
 description = 'Not found.',
 isOperational = true
 ) {
 super(name, statusCode, isOperational, description)
 }
}

module.exports = Api404Error
How do you use it? Throw it in your code when you want to handle 404 errors.

const Api404Error = require('./api404Error')

...
const user = await User.getUserById(req.params.id)
if (user === null) {
 throw new Api404Error(`User with id: ${req.params.id} not found.`)
}
...
You can duplicate this code for any custom error, 500, 400, and any other you want to handle.

Complete visibility into your infrastructure.
Learn more

2. Use a Middleware
Once you have a set of custom errors, you can configure centralized error handling. You want to have a middleware that catches all errors. There you can decide what to do with them and where to send them if they need to notify you via an alert notification.

In your API routes you’ll end up using the next() function to forward errors to the error handler middleware.

Let me show you.

...
app.post('/user', async (req, res, next) => {
 try {
const newUser = User.create(req.body)
 } catch (error) {
 next(error)
 }
})
...
The next() function is a special function in Express.js middlewares that sends values down the middleware chain. At the bottom of your routes files you should have a .use() method that uses the error handler middleware function.

const { logError, returnError } = require('./errorHandler')

app.use(logError)
app.use(returnError)
The error handler middleware should have a few key parts. You should check if the error is operational, and decide which errors to send as alert notifications so you can debug them in more detail. Here’s what I suggest you add to your error handler.

function logError (err) {
 console.error(err)
}

function logErrorMiddleware (err, req, res, next) {
 logError(err)
 next(err)
}

function returnError (err, req, res, next) {
 res.status(err.statusCode || 500).send(err.message)
}

function isOperationalError(error) {
 if (error instanceof BaseError) {
 return error.isOperational
 }
 return false
}

module.exports = {
 logError,
 logErrorMiddleware,
 returnError,
 isOperationalError
}
3. Restart Your App Gracefully to Handle Programmer Errors
Everything I’ve explained so far has been related to operational errors. I’ve shown how to gracefully handle expected errors and how to send them down the middleware chain to a custom error handling middleware.

Let’s jump into programmer errors now. These errors can often cause issues in your apps like memory leaks and high CPU usage. The best thing to do is to crash the app and restart it gracefully by using the Node.js cluster mode or a tool like PM2. I wrote another article where I describe in detail how to detect Node.js memory leaks using various solutions.

4. Catch All Uncaught Exceptions
When unexpected errors like these happen, you want to handle it immediately by sending a notification and restarting the app to avoid unexpected behavior.

const { logError, isOperationalError } = require('./errorHandler')

...
process.on('uncaughtException', error => {
 logError(error)

 if (!isOperationalError(error)) {
 process.exit(1)
 }
})
...
5. Catch All Unhandled Promise Rejections
Promise rejections in Node.js only cause warnings. You want them to throw errors, so you can handle them properly.

It’s good practice to use fallback and subscribe to:

process.on('unhandledRejection', callback)
This lets you throw an error properly.

Here’s what the error handling flow should look like.

...
const user = User.getUserById(req.params.id)
 .then(user => user)
 // missing a .catch() block
...

// if the Promise is rejected this will catch it
process.on('unhandledRejection', error => {
 throw error
})

process.on('uncaughtException', error => {
 logError(error)

 if (!isOperationalError(error)) {
 process.exit(1)
 }
})
6. Use a Centralized Location for Logs and Error Alerting
I recently wrote a detailed tutorial about Node.js logging best practices you should check out.

The gist of it is to use structured logging to print errors in a formatted way and send them for safekeeping to a central location, like Sematext Logs, our log management tool.

It’ll help with your sanity and persist the logs over time, so you can go back and troubleshoot issues whenever things break.

To do this, you should use loggers like winston and morgan. Additionally, you can add winston-logsene to send the logs to Sematext right away.

First, create a setup for winston and winston-logsene. Create a loggers directory and a logger.js file. Paste this into the file.

// logger.js

const winston = require('winston')
const Logsene = require('winston-logsene')

const options = {
 console: {
 level: 'debug',
 handleExceptions: true,
 json: false,
 colorize: true
 },
 logsene: {
 token: process.env.LOGS_TOKEN,
 level: 'debug',
 type: 'app_logs',
 url: 'https://logsene-receiver.sematext.com/_bulk'
 }
}

const logger = winston.createLogger({
 levels: winston.config.npm.levels,
 transports: [
 new winston.transports.Console(options.console),
 new Logsene(options.logsene)
 ],
 exitOnError: false
})

module.exports = logger
The good thing with this is that you get JSON formatted logs you can analyze to get more useful information about your app. You’ll also get all logs forwarded to Sematext. This will alert you whenever errors occur. That’s pretty awesome!

Furthermore, you should add an httpLogger.js file in the loggers directory and add morgan and morgan-json to print out access logs. Paste this into the httpLogger.js:

const morgan = require('morgan')
const json = require('morgan-json')
const format = json({
 method: ':method',
 url: ':url',
 status: ':status',
 contentLength: ':res[content-length]',
 responseTime: ':response-time'
})

const logger = require('./logger')
const httpLogger = morgan(format, {
 stream: {
 write: (message) => {
 const {
 method,
 url,
 status,
 contentLength,
 responseTime
 } = JSON.parse(message)

 logger.info('HTTP Access Log', {
 timestamp: new Date().toString(),
 method,
 url,
 status: Number(status),
 contentLength,
 responseTime: Number(responseTime)
 })
 }
 }
})

module.exports = httpLogger
In your app.js file you can now require both the logger.js and httpLogger.js, and use the logger instead of console.log().

// app.js

const logger = require('./loggers/logger')
const httpLogger = require('./loggers/httpLogger')
...

app.use(httpLogger)
...

In your errorHandler.js you can now replace all console.error() statements with logger.error() to persist the logs in Sematext.

// errorHandler.js

const logger = require('../loggers/logger')
const BaseError = require('./baseError')

function logError (err) {
 logger.error(err)
}

function logErrorMiddleware (err, req, res, next) {
 logError(err)
 next(err)
}

function returnError (err, req, res, next) {
 res.status(err.statusCode || 500).send(err.message)
}

function isOperationalError(error) {
 if (error instanceof BaseError) {
 return error.isOperational
 }
 return false
}

module.exports = {
 logError,
 logErrorMiddleware,
 returnError,
 isOperationalError
}
That’s it. You now know how to properly handle errors!

However, I do want to cover how to deliver errors. Should you be throwing them, passing errors in callback functions or promise rejections, or emit an “error” event via an EventEmitter.

How to Deliver Errors: Function Patterns
Let’s go over the four main ways to deliver an error in Node.js:

throw the error (making it an exception).
pass the error to a callback, a function provided specifically for handling errors and the results of asynchronous operations
pass the error to a reject Promise function
emit an “error” event on an EventEmitter
We’ve talked about how to handle errors, but when you’re writing a new function, how do you deliver errors to the code that called your function?

Throwing Errors
When you throw an error it unwinds the entire function call stack ignoring any functions you have on the stack. It gets delivered synchronously, in the same context where the function was called.

If you use a try-catch block you can handle the error gracefully. Otherwise, the app usually crashes, unless you have a fallback for catching Uncaught Exceptions as I explained above.

Here’s an example of throwing an error and handling it in a try-catch block:

const getUserWithAsyncAwait = async (id) => {
 try {
 const user = await getUser(id)
 if (!user) {
 throw new 404ApiError('No user found.')
 }

 return user
 } catch (error) {
 // handle the error
 logError(error)
 }
}

const user = await getUserWithAsyncAwait(1)

...
Using Callback
Callbacks are the most basic way of delivering an error asynchronously. The user passes you a function – the callback, and you invoke it sometime later when the asynchronous operation completes. The usual pattern is that the callback is invoked as callback(err, result), where only one of err and result is non-null, depending on whether the operation succeeded or failed.

Callbacks have been around for ages. It’s the oldest way of writing asynchronous JavaScript code. It’s also the oldest way of delivering errors asynchronously.

You pass a callback function as a parameter to the calling function, which you later invoke when the asynchronous function completes executing.

The usual pattern looks like this:

callback(err, result)
The first parameter in the callback is always the error.

Inside the callback function, you’ll then first check if the error exists and only if it’s a non-null value you continue executing the callback function.

function getUserWithCallback(id, callback) {
 getUser(id, function(user) {
 if (!user) {
 return callback(new 404ApiError('No user found.'))
 }

 callback(null, user)
 })
}

getUserWithCallback(1, function(err, user) {
 if (err) {
 // handle the error
 logError(error)
 }

 const user = user
 ...
})
Using Promises
Promises have replaced callbacks as the new and improved way of writing asynchronous code.

This pattern has become the new norm since Node.js version 8 that included async/await out of the box. Asynchronous code can be written to look like synchronous code. Catch errors can be done by using try-catch.

function getUserWithPromise(id) {
 return new Promise((resolve, reject) => {
 getUser(id, function(user) {
 if (!user) {
 return reject(new 404ApiError('No user found.'))
 }

 resolve(user)
 })
 })
}

getUserWithPromise(1)
 .then(user => {
 const user = user
 ...
 })
 .catch(err => {
 logError(error)
 })
Using EventEmitter
Ready for some more complicated use cases?

In some cases, you can’t rely on promise rejection or callbacks. What if you’re reading files from a stream. Or, fetching rows from a database and reading them as they arrive. A use case I see on a daily basis is streaming log lines and handling them as they’re coming in.

You can’t rely on one error because you need to listen for error events on the EventEmitter object.

In this case, instead of returning a Promise, your function would return an EventEmitter and emit row events for each result, an end event when all results have been reported, and an error event if any error is encountered.

Here’s a code sample from Logagent, an open-source log shipper I maintain. The socket value is an EventEmitter object.

net.createServer(socket => {
...

 socket
 .on('data', data => {
 ...

 })
 .on('end', result => {
 …

 })
 .on('error', console.error) // handle multiple errors
}
Throw, Callback, Promises, or EventEmitter: Which Pattern Is the Best?
Now, we’ve finally come to the verdict, when should you throw errors, and when do you use promise rejections or EventEmitters?

For operational errors, you should use Promise rejections or a try-catch block with async/await. You want to handle these errors asynchronously. It works well and is widely used.

If you have a more complicated case like I explained above, you should use an event emitter instead.

You want to explicitly throw errors if unwinding the whole call stack is needed. This can mean when handling programmer errors and you want the app to restart.

How to Write Functions for Efficient Error Handling
Whatever you do, choose one way to deliver operational errors. You can throw errors and deliver them synchronously, or asynchronously by using Promise rejections, passing them in callbacks, or emitting errors on an EventEmitter.

Log Management Tools You Can Use to Handle Errors in Node.js
After setting up centralized error handling, the next logical step is to use a central location for your logs that also gives you error alerting.

Sematext Logs provides log management and error alerting to help analyze logs and debug and fix errors and exceptions. Definitely check it out and try it yourself. But you can also take a look at the lists where we compare the best log management tools, log analysis software, and cloud logging services available today.

noed.js error exception handling

Closing Thoughts
In this tutorial, I wanted to give you a way to handle the dreaded unhandledException and unhandledRejection errors in Node.js apps. I hope it was useful to you and that you’ll use what you learned today in your own apps.

Alongside this, I also explained a few best practices about error handling, like how to set up centralized error handling with middlewares and use a central location for your error logs. Don’t forget that logging frameworks like winston and morgan are crucial for this to work.

Lastly, I explained a few different ways of delivering errors, either with throw or with Promise .reject(), callback functions or the .on(‘error’) event on an EventEmitter.

I’ve tried to share all the knowledge I’ve gained over the last few years while maintaining open-source repos to keep you from making the same mistakes I’ve made in the past. Best of luck!

If you ever need alerting, error handling, and log management for your production apps, check us out.

Related posts:
Exception Handling in Java: How-to Tutorial with Examples & Best Practices
As developers, we would like our users to interact with applications that run smoothly and...
Express.js Best Practices to Improve Performance & Reliability in Production
What is the most important feature an Express.js application can have? Maybe using sockets for...
Node.js Logging Tutorial: How to Check, Write & Debug [Best Practices]
Building SaaS products is hard. Making customers happy is even harder. I should know, I’ve...