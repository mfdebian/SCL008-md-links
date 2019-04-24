#!/usr/bin/env node
'use strict'

// mdLinks module requirement
const mdLinks = require("./md-links");
// File System requirement
const fs = require('fs');
// Markdown Link Extractor requirement
const markdownLinkExtractor = require('markdown-link-extractor');
// Options
var validate = false;
var stats = false;

/*
process.argv is an array containing the command line arguments.
The first element will be 'node', the second element will be
the name of the JavaScript file. The next elements will be
any additional command line arguments.
*/
process.argv.forEach((option, index, array) => {
  console.log("index:", index, "value:", option);
  if(index > 1 && index < 5) {
    if(option == "--validate" || option == "--v") {
      validate = true;
    } else if(option == "--stats" || option == "--s") {
      stats = true;
    } else {
      console.log("Opción no válida:", option);
    }
  }
});

console.log("validate:", validate);
console.log("stats:", stats);

if(validate && stats) {
  console.log("both");
} else if(validate) {
  console.log("only validate");
} else if(stats) {
  console.log("only stats");
}

// Read Markdown file function
const readMarkdownFile = (callback) => {
  fs.readFile("./holas.txt", 'utf-8', (error, content) => {

    if(error) {
      return callback(error)
    }

    // Since there's no error at this point, we return null instead
    callback(null, content)

  })
}

// Read markdown file function call
readMarkdownFile((error, content) => {
  console.log(content)
});

console.log(mdLinks.validateAndStats());
