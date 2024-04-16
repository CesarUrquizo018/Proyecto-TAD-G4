const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola manos 123 probando');
});

app.listen(3000, () => {
  console.log('Servidor Node.js escuchando en el puerto 3000');
});