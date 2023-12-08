const express = require("express");
const app = express();
const port = 1010 ;
 
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('client'));
app.use('/' , express.static('client'));
app.listen(1010, function(){
    console.log('listening on port 1010')
    })
 
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
 
app.listen(port, () => {
  console.log('Server is running on port ${port}');
});