const express = require('express');
const axios = require('axios');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
//port http
http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
app.use(express.static(__dirname + '/public'));



//select link to start
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


//request post in api dribbble
async function requestShots() {
    const response = await axios.get(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.API_KEY}&per_page=100`)
    try {
        app.get("/getProject", (req, res) => {
            res.send(response.data)
        })
    } catch (err) {
        console.log(err)
    }
}


//request user data in api dribbble
async function requestUser() {
    const response = await axios.get(`https://api.dribbble.com/v2/user/?access_token=${process.env.API_KEY}`)
    try {
        app.get("/getUser", (req,res) => {
            res.send(response.data)
        })
    } catch (err) {
        console.log(err)
    }
}
//call request function
requestShots()
requestUser()
