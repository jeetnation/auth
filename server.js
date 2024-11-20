let express = require('express');
let cookieParser = require('cookie-parser')
let bcrypt = require('bcryptjs');
let server = express();



server.use(cookieParser());

server.get('/',(req, res) => {
// setting the cookie 
res.cookie('name','Fahad');
res.send('done')

})

server.get('/read',(req, res) => {
  // reading cookies for the req
    console.log(req.cookies)
    res.send('read page')

})


server.listen(3000)