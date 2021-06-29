const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.use(express.static('.'))
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/http' + '/index.html')
})

app.listen(port, function () {
  console.log("Servidor iniciado na porta", port);
})