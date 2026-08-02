// require('./mongodb');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

app.use(bodyparser.json());

// Serve the HTML frontend
app.use(express.static(path.join(__dirname, 'public')));

// API routes
const detailRoute = require('./routers/router');
app.use('/', detailRoute);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'app.html'));
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.html'));
});

// // Force your code to listen on the exact port Azure expects
const PORT = 32778; 
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running globally on port ${PORT}`);
});
// const express = require('express');
// const app = express();
// const PORT = 32778;

// // Serve your frontend assets
// app.use(express.static('public')); 

// // 🟢 Open the port globally immediately
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Frontend server is running smoothly on port ${PORT}`);
// });
