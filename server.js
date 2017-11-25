
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Telling node we are creating an express server
const app = express();

// Set the port to listen on
const PORT = process.env.PORT || 3001;

// Sets the express app to handle parsing
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

// Listener - 'Starts' the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
