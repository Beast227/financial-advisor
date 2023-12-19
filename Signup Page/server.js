const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB URL)
mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a mongoose schema for user data
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
});

// Create a mongoose model based on the schema
const User = mongoose.model('User', userSchema);

// Handle user registration
app.post('/signup', async (req, res) => {
  const { username, password, name } = req.body;

  // Check if the username already exists
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Create a new user
  const newUser = new User({ username, password, name });
  await newUser.save();

  res.json({ message: 'User registered successfully' });
  res.redirect('../Main web/index.html')
});

// Handle user login
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match
  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  res.json({ message: 'Login successful', user });
  res.redirect('../Main web/index.html')
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
