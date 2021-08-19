// index.js

const http = require('http');

function onRequest(request, response){
  const data = {
    name: "Yudi Krisnandi",
    age: 22
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(data));

  response.end();
}

http.createServer(onRequest).listen(8000);