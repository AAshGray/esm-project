import express from 'express';

const app = express();

// configure the app for requests

// route to our files/endpoints
app.get("/", (req, res) => res.send("Hello, world!"));

//start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));