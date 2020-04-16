// const express = require('express');
// const mongoose = require('mongoose');
// const logger = require('morgan');
// const bodyParser = require('body-parser');

// const userRoutes = require('./routes/user.routes');
// const journalEntryRoutes = requie('./routes/journalEntry.routes')
// const errorMiddleware = require('./middleware/errors');

// const app = express();
// const port = process.env.PORT || 4000;
// const logLevel = process.env.LOG_LEVEL || 'dev';

// // Make connection to the db
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/journal', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Store the instance of db so we can listen to events.
// const db = mongoose.connection;

// db.on('error', (...errorArgs) => console.error('connection error:', ...errorArgs));

// db.once('open', function() {
//   console.log('Connection Successful!');
// });

// // Middleware - logs server requests to console
// app.use(logger(logLevel));

// // Middleware - parses incoming requests data (https://github.com/expressjs/body-parser)
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/journalEntry', journalEntryRoutes);

// // Handle 404 requests
// app.use(errorMiddleware.error404);

// // Handle 500 requests - applies mostly to live services
// app.use(errorMiddleware.error500);

// // listen on server port
// app.listen(port, errorMiddleware.logger(port));