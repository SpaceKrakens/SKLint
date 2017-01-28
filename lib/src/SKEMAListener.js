// Generated from src/SKEMA.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SKEMAParser.
function SKEMAListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SKEMAListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SKEMAListener.prototype.constructor = SKEMAListener;

// Enter a parse tree produced by SKEMAParser#skema.
SKEMAListener.prototype.enterSkema = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#skema.
SKEMAListener.prototype.exitSkema = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#meta.
SKEMAListener.prototype.enterMeta = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#meta.
SKEMAListener.prototype.exitMeta = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#simple_value.
SKEMAListener.prototype.enterSimple_value = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#simple_value.
SKEMAListener.prototype.exitSimple_value = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#entry.
SKEMAListener.prototype.enterEntry = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#entry.
SKEMAListener.prototype.exitEntry = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#simple_type_def.
SKEMAListener.prototype.enterSimple_type_def = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#simple_type_def.
SKEMAListener.prototype.exitSimple_type_def = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#complex_type_def.
SKEMAListener.prototype.enterComplex_type_def = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#complex_type_def.
SKEMAListener.prototype.exitComplex_type_def = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#map.
SKEMAListener.prototype.enterMap = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#map.
SKEMAListener.prototype.exitMap = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#array.
SKEMAListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#array.
SKEMAListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by SKEMAParser#type_def.
SKEMAListener.prototype.enterType_def = function(ctx) {
};

// Exit a parse tree produced by SKEMAParser#type_def.
SKEMAListener.prototype.exitType_def = function(ctx) {
};



exports.SKEMAListener = SKEMAListener;