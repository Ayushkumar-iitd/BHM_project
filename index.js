const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const { registerUser, loginUser, authenticateToken } = require('./controllers/authController');
require('dotenv').config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Use body-parser middleware
app.use(bodyParser.json());

// Use routes defined in user.js
app.use('/api/user', userRoutes);

// Connect to MongoDB using the URI from the environment variables
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.log(err));

// Secret for JWT
const JWT_SECRET = process.env.JWT_SECRET;


