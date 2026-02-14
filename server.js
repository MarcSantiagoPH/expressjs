const express = require('express');
const path = require('path');

const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/blog', (req, res) => {
    fs.readFile('./data/posts.json', 'utf8', (err, data) => {
        if (err) {
            res.send("Error loading blog posts");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.get('/blog-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});
