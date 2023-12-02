//Przypisanie expressa jako modułu do zmiennej
const express = require("express");
var path = require("path");

// Inicjalizacja aplikacji
const app = express();

//Funkcja middleware do uwierzytelniania użytkownika
function authentication(req, res, next) {
  var authheader = req.headers.authorization;
  console.log(req.headers);

  if (!authheader) {
    var err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }

  var auth = new Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  var user = auth[0];
  var pass = auth[1];

  if (user == "" && pass == "") {
    // If Authorized user
    next();
  } else {
    var err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
}

// First step is the authentication of the client
//Użycie funkcji middleware do uwierzytelniania użytkownika
app.use(authentication);
//Użycie wbudowanego w expressa middleware do podania nam pliku html
app.use(express.static(path.join(__dirname, "public")));

// Server setup
//Ustawienie serwera na porcie 3000
app.listen(3000, () => {
  console.log("Server is Running");
});
