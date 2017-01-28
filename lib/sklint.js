
var antlr4 = require('antlr4/index');
var SKONLexer = require('./lib/src/SKONLexer.js');

var input = `
~Version: 1~
~SKEMA: "./Colors.skema"~

Colors:
[
    { Name: "Red", Color: 0xFF0000, },
    { Name: "Green", Color: 0x00FF00, },
    { Name: "Blue", Color: 0x0000FF, },
],`;
var chars = new antlr4.InputStream(input);
var lexer = new SKONLexer.SKONLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new MyGrammarParser.MyGrammarParser(tokens);
parser.buildParseTrees = true;
var tree = parser.MyStartRule();
