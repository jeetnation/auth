# authentication and authorization
npm i jsonwebtoken bcrypt cookie-parser

### how to set cookie


chrome extension - editthiscookie


```js

let express = require('express');
let cookieParser = require('cookie-parser')
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




```

##### difference between cookie and authorization header->

for auth-header , you will have to pass it everytime, cookies stick on all routes.


### bcrypt kaise use krte h for password encrypt

bycrypt uses SHA256 algorithm





### jwt kya h aur data kaise store ya nikale

