// Generated from src/SKON.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SKONParser.
function SKONListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SKONListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SKONListener.prototype.constructor = SKONListener;

// Enter a parse tree produced by SKONParser#skon.
SKONListener.prototype.enterSkon = function(ctx) {
};

// Exit a parse tree produced by SKONParser#skon.
SKONListener.prototype.exitSkon = function(ctx) {
};


// Enter a parse tree produced by SKONParser#meta.
SKONListener.prototype.enterMeta = function(ctx) {
};

// Exit a parse tree produced by SKONParser#meta.
SKONListener.prototype.exitMeta = function(ctx) {
};


// Enter a parse tree produced by SKONParser#open_map.
SKONListener.prototype.enterOpen_map = function(ctx) {
};

// Exit a parse tree produced by SKONParser#open_map.
SKONListener.prototype.exitOpen_map = function(ctx) {
};


// Enter a parse tree produced by SKONParser#map.
SKONListener.prototype.enterMap = function(ctx) {
};

// Exit a parse tree produced by SKONParser#map.
SKONListener.prototype.exitMap = function(ctx) {
};


// Enter a parse tree produced by SKONParser#pair.
SKONListener.prototype.enterPair = function(ctx) {
};

// Exit a parse tree produced by SKONParser#pair.
SKONListener.prototype.exitPair = function(ctx) {
};


// Enter a parse tree produced by SKONParser#open_array.
SKONListener.prototype.enterOpen_array = function(ctx) {
};

// Exit a parse tree produced by SKONParser#open_array.
SKONListener.prototype.exitOpen_array = function(ctx) {
};


// Enter a parse tree produced by SKONParser#array.
SKONListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by SKONParser#array.
SKONListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by SKONParser#simple_value.
SKONListener.prototype.enterSimple_value = function(ctx) {
};

// Exit a parse tree produced by SKONParser#simple_value.
SKONListener.prototype.exitSimple_value = function(ctx) {
};


// Enter a parse tree produced by SKONParser#complex_value.
SKONListener.prototype.enterComplex_value = function(ctx) {
};

// Exit a parse tree produced by SKONParser#complex_value.
SKONListener.prototype.exitComplex_value = function(ctx) {
};


// Enter a parse tree produced by SKONParser#value.
SKONListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by SKONParser#value.
SKONListener.prototype.exitValue = function(ctx) {
};



exports.SKONListener = SKONListener;