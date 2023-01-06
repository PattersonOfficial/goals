const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');
const colors = require('colors');
const connectDatabase = require('./config/database');
const port = process.env.PORT || 3000;

connectDatabase();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goal-routes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on Port: ${port}`));
