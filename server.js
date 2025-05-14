const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/menu', (req, res) => res.sendFile(path.join(__dirname, 'views', 'menu.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('New Contact Form Submission:', { name, email, message });
  res.send('Thank you for contacting us!');
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
