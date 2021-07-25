const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.get("/about", (req,res) => {
    res.sendFile(path.resolve("frontend","about.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
})

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));