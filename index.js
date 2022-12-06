//First step is to create a project by initializing npm
//npm init
//To import cowsay type 'npm i cousay' you'll get it from npm..
//To use this module copy the 'usage as a module' from npm cowsay package(library)...
//npm is used to import libraries / header files (npm : node package manager)

const cowsay = require("cowsay"); // <----  This is a required field...
const Quote = require('inspirational-quotes'); // Here the variable name acts as module name, so we can access all the funcion using this module name with a '.' operator...

console.log(
    cowsay.say({
        text: Quote.getRandomQuote(),
        e: "^^",
        T: "x",
    })
)


