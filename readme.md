## NodeJS

- Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

- Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

- Node.js runs in a single process, without creating a new thread for every request.(its a asynchronous,if we want syncronous we can achieve)

npm packages:

- npm is the node package manager for JavaScript.
- npm is the world's largest Software Registry.
- The registry contains over 800,000 code packages.
- Open-source developers use npm to share software.
- Many organizations also use npm to manage private development.

1. In Built
   a. http: to create a server and listen to the port for the http request.
   b. fs(file system): to read and write files.
   c. url: to parse the url.    
   d. path: to work with file and directory paths.
   e. events: to handle events.
   f. util: to access utility functions.
   g. os: to get information about the operating system.

2. Third Party
   a. express: to create a server and listen to the port for the http request.
   b. nodemon: to restart the server automatically when the file changes.
   c. body-parser: to parse the incoming request.
   d. mongoose: to connect to the MongoDB database and to perform CRUD operations.
   e. dotenv: to store the environment variables.
   f. morgan: to log the request.
   g. bcrypt: to hash the password.
   h. jsonwebtoken: to generate the token.
   i. cors: to enable the cross-origin resource sharing.
   j. multer: to upload the file.
   k. nodemailer: to send the email. (SendGrid, MailChimp, etc.)
   l. socket.io: to enable the real-time communication.

3. Custom
   a. config: to store the configuration.
   b. middleware: to handle the request.
   c. model: to define the schema.
   d. route: to define the route.
   e. controller: to handle the request.
   f. service: to perform the business logic.
   g. helper: to write the utility functions.
   h. validation: to validate the request.
   i. error: to handle the error.
   j. test: to write the test cases.

cors: Cross-Origin Resource Sharing

- CORS is a security feature implemented by browsers that restricts the resources that a web page can request from another domain outside of the domain from which the first resource was served.
- It is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. 