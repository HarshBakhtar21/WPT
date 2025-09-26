const express = require('express');
const app = express();
const path = require('path');

// Set view engine to hbs
app.set('view engine', 'hbs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Sample route
app.get('/', (req, res) => {
  res.render('home', { title: 'Welcome Page', username: 'Aarav' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
