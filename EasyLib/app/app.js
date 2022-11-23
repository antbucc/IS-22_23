const express = require('express');
const app = express();
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

/**
 * Configure Express.js parsing middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/**
 * CORS requests
 */
app.use(cors())


app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);



const students = require('./students.js');
const books = require('./books.js');
const booklendings = require('./booklendings.js');





app.use((req, res, next) => {
    console.log("called: " + req.method + ' ' + req.url)
    next()
})



/**
 * Resource routing
 */

app.use('/api/v1/books', books);
app.use('/api/v1/students', students);
app.use('/api/v1/booklendings', booklendings);


/* Default 404 handler */
app.use((req, res) => {
    res.status(404);
    res.json({ error: 'Not found' });
});



module.exports = app;