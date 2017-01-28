// Generated from src/SKON.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SKONListener = require('./SKONListener').SKONListener;
var grammarFileName = "SKON.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0013S\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004(\n\u0004",
    "\f\u0004\u000e\u0004+\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u00053\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u0007<\n\u0007\f\u0007\u000e\u0007?\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bG\n\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0005\nM\n\n\u0003\u000b\u0003\u000b\u0005\u000bQ\n\u000b",
    "\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0002\u0003\u0004\u0002\u0003\u0005\u000e\u0010O\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u0006)",
    "\u0003\u0002\u0002\u0002\b2\u0003\u0002\u0002\u0002\n4\u0003\u0002\u0002",
    "\u0002\f=\u0003\u0002\u0002\u0002\u000eF\u0003\u0002\u0002\u0002\u0010",
    "H\u0003\u0002\u0002\u0002\u0012L\u0003\u0002\u0002\u0002\u0014P\u0003",
    "\u0002\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0002\u0017\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d\u0005",
    "\u0006\u0004\u0002\u001d\u0003\u0003\u0002\u0002\u0002\u001e\u001f\u0007",
    "\u0006\u0002\u0002\u001f \u0007\u0007\u0002\u0002 !\u0007\r\u0002\u0002",
    "!\"\u0005\u0010\t\u0002\"#\u0007\u0006\u0002\u0002#\u0005\u0003\u0002",
    "\u0002\u0002$%\u0005\n\u0006\u0002%&\u0007\f\u0002\u0002&(\u0003\u0002",
    "\u0002\u0002\'$\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'",
    "\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0007\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002,-\u0007\b\u0002\u0002-.\u0005",
    "\u0006\u0004\u0002./\u0007\t\u0002\u0002/3\u0003\u0002\u0002\u00020",
    "1\u0007\b\u0002\u000213\u0007\t\u0002\u00022,\u0003\u0002\u0002\u0002",
    "20\u0003\u0002\u0002\u00023\t\u0003\u0002\u0002\u000245\u0007\u0007",
    "\u0002\u000256\u0007\r\u0002\u000267\u0005\u0014\u000b\u00027\u000b",
    "\u0003\u0002\u0002\u000289\u0005\u0014\u000b\u00029:\u0007\f\u0002\u0002",
    ":<\u0003\u0002\u0002\u0002;8\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>\r\u0003",
    "\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0007\n\u0002\u0002A",
    "B\u0005\f\u0007\u0002BC\u0007\u000b\u0002\u0002CG\u0003\u0002\u0002",
    "\u0002DE\u0007\n\u0002\u0002EG\u0007\u000b\u0002\u0002F@\u0003\u0002",
    "\u0002\u0002FD\u0003\u0002\u0002\u0002G\u000f\u0003\u0002\u0002\u0002",
    "HI\t\u0002\u0002\u0002I\u0011\u0003\u0002\u0002\u0002JM\u0005\b\u0005",
    "\u0002KM\u0005\u000e\b\u0002LJ\u0003\u0002\u0002\u0002LK\u0003\u0002",
    "\u0002\u0002M\u0013\u0003\u0002\u0002\u0002NQ\u0005\u0010\t\u0002OQ",
    "\u0005\u0012\n\u0002PN\u0003\u0002\u0002\u0002PO\u0003\u0002\u0002\u0002",
    "Q\u0015\u0003\u0002\u0002\u0002\t\u0019)2=FLP"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', 'null', "'true'", "'false'", "'~'", 'null', 
                     "'{'", "'}'", "'['", "']'", "','", "':'" ];

var symbolicNames = [ 'null', "DATETIME", "TRUE", "FALSE", "METADELIMIT", 
                      "KEY", "OPEN_MAP", "CLOSE_MAP", "OPEN_ARRAY", "CLOSE_ARRAY", 
                      "SEPARATOR", "DEFINE", "STRING", "INTEGER", "FLOAT", 
                      "COMMENT", "ML_COMMENT", "WS" ];

var ruleNames =  [ "skon", "meta", "open_map", "map", "pair", "open_array", 
                   "array", "simple_value", "complex_value", "value" ];

function SKONParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SKONParser.prototype = Object.create(antlr4.Parser.prototype);
SKONParser.prototype.constructor = SKONParser;

Object.defineProperty(SKONParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SKONParser.EOF = antlr4.Token.EOF;
SKONParser.DATETIME = 1;
SKONParser.TRUE = 2;
SKONParser.FALSE = 3;
SKONParser.METADELIMIT = 4;
SKONParser.KEY = 5;
SKONParser.OPEN_MAP = 6;
SKONParser.CLOSE_MAP = 7;
SKONParser.OPEN_ARRAY = 8;
SKONParser.CLOSE_ARRAY = 9;
SKONParser.SEPARATOR = 10;
SKONParser.DEFINE = 11;
SKONParser.STRING = 12;
SKONParser.INTEGER = 13;
SKONParser.FLOAT = 14;
SKONParser.COMMENT = 15;
SKONParser.ML_COMMENT = 16;
SKONParser.WS = 17;

SKONParser.RULE_skon = 0;
SKONParser.RULE_meta = 1;
SKONParser.RULE_open_map = 2;
SKONParser.RULE_map = 3;
SKONParser.RULE_pair = 4;
SKONParser.RULE_open_array = 5;
SKONParser.RULE_array = 6;
SKONParser.RULE_simple_value = 7;
SKONParser.RULE_complex_value = 8;
SKONParser.RULE_value = 9;

function SkonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_skon;
    return this;
}

SkonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkonContext.prototype.constructor = SkonContext;

SkonContext.prototype.open_map = function() {
    return this.getTypedRuleContext(Open_mapContext,0);
};

SkonContext.prototype.meta = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MetaContext);
    } else {
        return this.getTypedRuleContext(MetaContext,i);
    }
};

SkonContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterSkon(this);
	}
};

SkonContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitSkon(this);
	}
};




SKONParser.SkonContext = SkonContext;

SKONParser.prototype.skon = function() {

    var localctx = new SkonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SKONParser.RULE_skon);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SKONParser.METADELIMIT) {
            this.state = 20;
            this.meta();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
        this.open_map();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_meta;
    return this;
}

MetaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetaContext.prototype.constructor = MetaContext;

MetaContext.prototype.METADELIMIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SKONParser.METADELIMIT);
    } else {
        return this.getToken(SKONParser.METADELIMIT, i);
    }
};


MetaContext.prototype.KEY = function() {
    return this.getToken(SKONParser.KEY, 0);
};

MetaContext.prototype.DEFINE = function() {
    return this.getToken(SKONParser.DEFINE, 0);
};

MetaContext.prototype.simple_value = function() {
    return this.getTypedRuleContext(Simple_valueContext,0);
};

MetaContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterMeta(this);
	}
};

MetaContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitMeta(this);
	}
};




SKONParser.MetaContext = MetaContext;

SKONParser.prototype.meta = function() {

    var localctx = new MetaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SKONParser.RULE_meta);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(SKONParser.METADELIMIT);
        this.state = 29;
        this.match(SKONParser.KEY);
        this.state = 30;
        this.match(SKONParser.DEFINE);
        this.state = 31;
        this.simple_value();
        this.state = 32;
        this.match(SKONParser.METADELIMIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Open_mapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_open_map;
    return this;
}

Open_mapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Open_mapContext.prototype.constructor = Open_mapContext;

Open_mapContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

Open_mapContext.prototype.SEPARATOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SKONParser.SEPARATOR);
    } else {
        return this.getToken(SKONParser.SEPARATOR, i);
    }
};


Open_mapContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterOpen_map(this);
	}
};

Open_mapContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitOpen_map(this);
	}
};




SKONParser.Open_mapContext = Open_mapContext;

SKONParser.prototype.open_map = function() {

    var localctx = new Open_mapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SKONParser.RULE_open_map);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SKONParser.KEY) {
            this.state = 34;
            this.pair();
            this.state = 35;
            this.match(SKONParser.SEPARATOR);
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_map;
    return this;
}

MapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapContext.prototype.constructor = MapContext;

MapContext.prototype.OPEN_MAP = function() {
    return this.getToken(SKONParser.OPEN_MAP, 0);
};

MapContext.prototype.open_map = function() {
    return this.getTypedRuleContext(Open_mapContext,0);
};

MapContext.prototype.CLOSE_MAP = function() {
    return this.getToken(SKONParser.CLOSE_MAP, 0);
};

MapContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterMap(this);
	}
};

MapContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitMap(this);
	}
};




SKONParser.MapContext = MapContext;

SKONParser.prototype.map = function() {

    var localctx = new MapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SKONParser.RULE_map);
    try {
        this.state = 48;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this.match(SKONParser.OPEN_MAP);
            this.state = 43;
            this.open_map();
            this.state = 44;
            this.match(SKONParser.CLOSE_MAP);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 46;
            this.match(SKONParser.OPEN_MAP);
            this.state = 47;
            this.match(SKONParser.CLOSE_MAP);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.KEY = function() {
    return this.getToken(SKONParser.KEY, 0);
};

PairContext.prototype.DEFINE = function() {
    return this.getToken(SKONParser.DEFINE, 0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitPair(this);
	}
};




SKONParser.PairContext = PairContext;

SKONParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SKONParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(SKONParser.KEY);
        this.state = 51;
        this.match(SKONParser.DEFINE);
        this.state = 52;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Open_arrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_open_array;
    return this;
}

Open_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Open_arrayContext.prototype.constructor = Open_arrayContext;

Open_arrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Open_arrayContext.prototype.SEPARATOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SKONParser.SEPARATOR);
    } else {
        return this.getToken(SKONParser.SEPARATOR, i);
    }
};


Open_arrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterOpen_array(this);
	}
};

Open_arrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitOpen_array(this);
	}
};




SKONParser.Open_arrayContext = Open_arrayContext;

SKONParser.prototype.open_array = function() {

    var localctx = new Open_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SKONParser.RULE_open_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SKONParser.DATETIME) | (1 << SKONParser.TRUE) | (1 << SKONParser.FALSE) | (1 << SKONParser.OPEN_MAP) | (1 << SKONParser.OPEN_ARRAY) | (1 << SKONParser.STRING) | (1 << SKONParser.INTEGER) | (1 << SKONParser.FLOAT))) !== 0)) {
            this.state = 54;
            this.value();
            this.state = 55;
            this.match(SKONParser.SEPARATOR);
            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.OPEN_ARRAY = function() {
    return this.getToken(SKONParser.OPEN_ARRAY, 0);
};

ArrayContext.prototype.open_array = function() {
    return this.getTypedRuleContext(Open_arrayContext,0);
};

ArrayContext.prototype.CLOSE_ARRAY = function() {
    return this.getToken(SKONParser.CLOSE_ARRAY, 0);
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitArray(this);
	}
};




SKONParser.ArrayContext = ArrayContext;

SKONParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SKONParser.RULE_array);
    try {
        this.state = 68;
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this.match(SKONParser.OPEN_ARRAY);
            this.state = 63;
            this.open_array();
            this.state = 64;
            this.match(SKONParser.CLOSE_ARRAY);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.match(SKONParser.OPEN_ARRAY);
            this.state = 67;
            this.match(SKONParser.CLOSE_ARRAY);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Simple_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_simple_value;
    return this;
}

Simple_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_valueContext.prototype.constructor = Simple_valueContext;

Simple_valueContext.prototype.STRING = function() {
    return this.getToken(SKONParser.STRING, 0);
};

Simple_valueContext.prototype.DATETIME = function() {
    return this.getToken(SKONParser.DATETIME, 0);
};

Simple_valueContext.prototype.INTEGER = function() {
    return this.getToken(SKONParser.INTEGER, 0);
};

Simple_valueContext.prototype.FLOAT = function() {
    return this.getToken(SKONParser.FLOAT, 0);
};

Simple_valueContext.prototype.TRUE = function() {
    return this.getToken(SKONParser.TRUE, 0);
};

Simple_valueContext.prototype.FALSE = function() {
    return this.getToken(SKONParser.FALSE, 0);
};

Simple_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterSimple_value(this);
	}
};

Simple_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitSimple_value(this);
	}
};




SKONParser.Simple_valueContext = Simple_valueContext;

SKONParser.prototype.simple_value = function() {

    var localctx = new Simple_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SKONParser.RULE_simple_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SKONParser.DATETIME) | (1 << SKONParser.TRUE) | (1 << SKONParser.FALSE) | (1 << SKONParser.STRING) | (1 << SKONParser.INTEGER) | (1 << SKONParser.FLOAT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Complex_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_complex_value;
    return this;
}

Complex_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Complex_valueContext.prototype.constructor = Complex_valueContext;

Complex_valueContext.prototype.map = function() {
    return this.getTypedRuleContext(MapContext,0);
};

Complex_valueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

Complex_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterComplex_value(this);
	}
};

Complex_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitComplex_value(this);
	}
};




SKONParser.Complex_valueContext = Complex_valueContext;

SKONParser.prototype.complex_value = function() {

    var localctx = new Complex_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SKONParser.RULE_complex_value);
    try {
        this.state = 74;
        switch(this._input.LA(1)) {
        case SKONParser.OPEN_MAP:
            this.enterOuterAlt(localctx, 1);
            this.state = 72;
            this.map();
            break;
        case SKONParser.OPEN_ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            this.array();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKONParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.simple_value = function() {
    return this.getTypedRuleContext(Simple_valueContext,0);
};

ValueContext.prototype.complex_value = function() {
    return this.getTypedRuleContext(Complex_valueContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKONListener ) {
        listener.exitValue(this);
	}
};




SKONParser.ValueContext = ValueContext;

SKONParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SKONParser.RULE_value);
    try {
        this.state = 78;
        switch(this._input.LA(1)) {
        case SKONParser.DATETIME:
        case SKONParser.TRUE:
        case SKONParser.FALSE:
        case SKONParser.STRING:
        case SKONParser.INTEGER:
        case SKONParser.FLOAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.simple_value();
            break;
        case SKONParser.OPEN_MAP:
        case SKONParser.OPEN_ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.complex_value();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SKONParser = SKONParser;
