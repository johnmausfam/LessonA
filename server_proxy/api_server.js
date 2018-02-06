var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  console.log(req.url);
  res.write(JSON.stringify({
      status:200,
      msg:"hello world!"
  })); //write a response to the client
  res.end(); //end the response
}).listen(3010);

