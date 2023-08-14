const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connection = require('./db')
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const router = require('./router');

dotenv.config();

const app = express();

// Database Connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(router);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3001
console.log(`Server started on port ${port}`)
app.listen(3001);