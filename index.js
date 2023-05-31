const express = require("express");
const app = express();

let contador = 0;
let incrementar1contador = 0;
let incrementar5contador = 0;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/ola", function (req, res) {
  res.send("Olá Mundo!");
});

app.get("/contador", function (req, res) {
  res.send({ contador });
});
app.get("/incrementar1", function (req, res) {
   contador += 1;
   incrementar1contador += 1;
   res.send({ contador });
});
app.get("/incrementar5", function (req, res) {
   contador += 1; 
   incrementar5contador += 1;
   res.send({ contador });
});
app.get("/relatorio", function (req, res) {
   const relatorio = {
    contador,
    incrementar1contador,
    incrementar5contador
   } 
   res.send( relatorio );
});

app.listen(3000);