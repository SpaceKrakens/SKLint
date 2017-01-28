// Generated from src/SKEMA.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SKEMAListener = require('./SKEMAListener').SKEMAListener;
var grammarFileName = "SKEMA.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001dV\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0007\u0002\u0016\n\u0002",
    "\f\u0002\u000e\u0002\u0019\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u001e\n\u0002\f\u0002\u000e\u0002!\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0005\u0005,\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u00052\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u00058\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0005\u0007>\n\u0007\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0007\bD\n\b\f\b\u000e\bG\u000b\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0005\tN\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005",
    "\nT\n\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0002\u0004\u0004\u0002\u0003\u0004\n\r\u0003\u0002\u0014\u0019",
    "U\u0002\u0017\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002",
    "\u0006(\u0003\u0002\u0002\u0002\b+\u0003\u0002\u0002\u0002\n9\u0003",
    "\u0002\u0002\u0002\f=\u0003\u0002\u0002\u0002\u000e?\u0003\u0002\u0002",
    "\u0002\u0010J\u0003\u0002\u0002\u0002\u0012S\u0003\u0002\u0002\u0002",
    "\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002\u0002\u0002",
    "\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002",
    "\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u001f\u0003\u0002\u0002\u0002",
    "\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001b\u0005\b\u0005\u0002",
    "\u001b\u001c\u0007\u0012\u0002\u0002\u001c\u001e\u0003\u0002\u0002\u0002",
    "\u001d\u001a\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002",
    " \u0003\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002\"#\u0007",
    "\t\u0002\u0002#$\u0007\u001a\u0002\u0002$%\u0007\u0013\u0002\u0002%",
    "&\u0005\u0006\u0004\u0002&\'\u0007\t\u0002\u0002\'\u0005\u0003\u0002",
    "\u0002\u0002()\t\u0002\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*,",
    "\u0007\b\u0002\u0002+*\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",7\u0003\u0002\u0002\u0002-.\u0007\u001a\u0002\u0002.1\u0007\u0013\u0002",
    "\u0002/2\u0005\u0012\n\u000202\u0007\u0005\u0002\u00021/\u0003\u0002",
    "\u0002\u000210\u0003\u0002\u0002\u000228\u0003\u0002\u0002\u000234\u0007",
    "\u0006\u0002\u000245\u0007\u001a\u0002\u000256\u0007\u0013\u0002\u0002",
    "68\u0005\u0012\n\u00027-\u0003\u0002\u0002\u000273\u0003\u0002\u0002",
    "\u00028\t\u0003\u0002\u0002\u00029:\t\u0003\u0002\u0002:\u000b\u0003",
    "\u0002\u0002\u0002;>\u0005\u000e\b\u0002<>\u0005\u0010\t\u0002=;\u0003",
    "\u0002\u0002\u0002=<\u0003\u0002\u0002\u0002>\r\u0003\u0002\u0002\u0002",
    "?E\u0007\u000e\u0002\u0002@A\u0005\b\u0005\u0002AB\u0007\u0012\u0002",
    "\u0002BD\u0003\u0002\u0002\u0002C@\u0003\u0002\u0002\u0002DG\u0003\u0002",
    "\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FH\u0003",
    "\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002HI\u0007\u000f\u0002\u0002",
    "I\u000f\u0003\u0002\u0002\u0002JM\u0007\u0010\u0002\u0002KN\u0005\u0012",
    "\n\u0002LN\u0007\u0005\u0002\u0002MK\u0003\u0002\u0002\u0002ML\u0003",
    "\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OP\u0007\u0011\u0002\u0002",
    "P\u0011\u0003\u0002\u0002\u0002QT\u0005\n\u0006\u0002RT\u0005\f\u0007",
    "\u0002SQ\u0003\u0002\u0002\u0002SR\u0003\u0002\u0002\u0002T\u0013\u0003",
    "\u0002\u0002\u0002\u000b\u0017\u001f+17=EMS"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'true'", "'false'", 'null', "'def'", "'req'", 
                     "'optional'", "'~'", 'null', 'null', 'null', 'null', 
                     "'{'", "'}'", "'['", "']'", "','", "':'", "'Any'", 
                     "'String'", "'Float'", "'Integer'", "'Boolean'", "'DateTime'" ];

var symbolicNames = [ 'null', "TRUE", "FALSE", "REF", "DEF", "REQ", "OPT", 
                      "METADELIMIT", "STRING_VAL", "FLOAT_VAL", "INTEGER_VAL", 
                      "DATETIME_VAL", "OPEN_MAP", "CLOSE_MAP", "OPEN_ARRAY", 
                      "CLOSE_ARRAY", "SEPARATOR", "DEFINE", "ANY", "STRING", 
                      "FLOAT", "INTEGER", "BOOLEAN", "DATETIME", "KEY", 
                      "COMMENT", "ML_COMMENT", "WS" ];

var ruleNames =  [ "skema", "meta", "simple_value", "entry", "simple_type_def", 
                   "complex_type_def", "map", "array", "type_def" ];

function SKEMAParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SKEMAParser.prototype = Object.create(antlr4.Parser.prototype);
SKEMAParser.prototype.constructor = SKEMAParser;

Object.defineProperty(SKEMAParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SKEMAParser.EOF = antlr4.Token.EOF;
SKEMAParser.TRUE = 1;
SKEMAParser.FALSE = 2;
SKEMAParser.REF = 3;
SKEMAParser.DEF = 4;
SKEMAParser.REQ = 5;
SKEMAParser.OPT = 6;
SKEMAParser.METADELIMIT = 7;
SKEMAParser.STRING_VAL = 8;
SKEMAParser.FLOAT_VAL = 9;
SKEMAParser.INTEGER_VAL = 10;
SKEMAParser.DATETIME_VAL = 11;
SKEMAParser.OPEN_MAP = 12;
SKEMAParser.CLOSE_MAP = 13;
SKEMAParser.OPEN_ARRAY = 14;
SKEMAParser.CLOSE_ARRAY = 15;
SKEMAParser.SEPARATOR = 16;
SKEMAParser.DEFINE = 17;
SKEMAParser.ANY = 18;
SKEMAParser.STRING = 19;
SKEMAParser.FLOAT = 20;
SKEMAParser.INTEGER = 21;
SKEMAParser.BOOLEAN = 22;
SKEMAParser.DATETIME = 23;
SKEMAParser.KEY = 24;
SKEMAParser.COMMENT = 25;
SKEMAParser.ML_COMMENT = 26;
SKEMAParser.WS = 27;

SKEMAParser.RULE_skema = 0;
SKEMAParser.RULE_meta = 1;
SKEMAParser.RULE_simple_value = 2;
SKEMAParser.RULE_entry = 3;
SKEMAParser.RULE_simple_type_def = 4;
SKEMAParser.RULE_complex_type_def = 5;
SKEMAParser.RULE_map = 6;
SKEMAParser.RULE_array = 7;
SKEMAParser.RULE_type_def = 8;

function SkemaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKEMAParser.RULE_skema;
    return this;
}

SkemaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkemaContext.prototype.constructor = SkemaContext;

SkemaContext.prototype.meta = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MetaContext);
    } else {
        return this.getTypedRuleContext(MetaContext,i);
    }
};

SkemaContext.prototype.entry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EntryContext);
    } else {
        return this.getTypedRuleContext(EntryContext,i);
    }
};

SkemaContext.prototype.SEPARATOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SKEMAParser.SEPARATOR);
    } else {
        return this.getToken(SKEMAParser.SEPARATOR, i);
    }
};


SkemaContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterSkema(this);
	}
};

SkemaContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitSkema(this);
	}
};




SKEMAParser.SkemaContext = SkemaContext;

SKEMAParser.prototype.skema = function() {

    var localctx = new SkemaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SKEMAParser.RULE_skema);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SKEMAParser.METADELIMIT) {
            this.state = 18;
            this.meta();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SKEMAParser.DEF) | (1 << SKEMAParser.OPT) | (1 << SKEMAParser.KEY))) !== 0)) {
            this.state = 24;
            this.entry();
            this.state = 25;
            this.match(SKEMAParser.SEPARATOR);
            this.state = 31;
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

function MetaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKEMAParser.RULE_meta;
    return this;
}

MetaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetaContext.prototype.constructor = MetaContext;

MetaContext.prototype.METADELIMIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SKEMAParser.METADELIMIT);
    } else {
        return this.getToken(SKEMAParser.METADELIMIT, i);
    }
};


MetaContext.prototype.KEY = function() {
    return this.getToken(SKEMAParser.KEY, 0);
};

MetaContext.prototype.DEFINE = function() {
    return this.getToken(SKEMAParser.DEFINE, 0);
};

MetaContext.prototype.simple_value = function() {
    return this.getTypedRuleContext(Simple_valueContext,0);
};

MetaContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterMeta(this);
	}
};

MetaContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitMeta(this);
	}
};




SKEMAParser.MetaContext = MetaContext;

SKEMAParser.prototype.meta = function() {

    var localctx = new MetaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SKEMAParser.RULE_meta);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(SKEMAParser.METADELIMIT);
        this.state = 33;
        this.match(SKEMAParser.KEY);
        this.state = 34;
        this.match(SKEMAParser.DEFINE);
        this.state = 35;
        this.simple_value();
        this.state = 36;
        this.match(SKEMAParser.METADELIMIT);
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
    this.ruleIndex = SKEMAParser.RULE_simple_value;
    return this;
}

Simple_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_valueContext.prototype.constructor = Simple_valueContext;

Simple_valueContext.prototype.STRING_VAL = function() {
    return this.getToken(SKEMAParser.STRING_VAL, 0);
};

Simple_valueContext.prototype.DATETIME_VAL = function() {
    return this.getToken(SKEMAParser.DATETIME_VAL, 0);
};

Simple_valueContext.prototype.INTEGER_VAL = function() {
    return this.getToken(SKEMAParser.INTEGER_VAL, 0);
};

Simple_valueContext.prototype.FLOAT_VAL = function() {
    return this.getToken(SKEMAParser.FLOAT_VAL, 0);
};

Simple_valueContext.prototype.TRUE = function() {
    return this.getToken(SKEMAParser.TRUE, 0);
};

Simple_valueContext.prototype.FALSE = function() {
    return this.getToken(SKEMAParser.FALSE, 0);
};

Simple_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterSimple_value(this);
	}
};

Simple_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitSimple_value(this);
	}
};




SKEMAParser.Simple_valueContext = Simple_valueContext;

SKEMAParser.prototype.simple_value = function() {

    var localctx = new Simple_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SKEMAParser.RULE_simple_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SKEMAParser.TRUE) | (1 << SKEMAParser.FALSE) | (1 << SKEMAParser.STRING_VAL) | (1 << SKEMAParser.FLOAT_VAL) | (1 << SKEMAParser.INTEGER_VAL) | (1 << SKEMAParser.DATETIME_VAL))) !== 0))) {
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

function EntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKEMAParser.RULE_entry;
    return this;
}

EntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryContext.prototype.constructor = EntryContext;

EntryContext.prototype.KEY = function() {
    return this.getToken(SKEMAParser.KEY, 0);
};

EntryContext.prototype.DEFINE = function() {
    return this.getToken(SKEMAParser.DEFINE, 0);
};

EntryContext.prototype.DEF = function() {
    return this.getToken(SKEMAParser.DEF, 0);
};

EntryContext.prototype.type_def = function() {
    return this.getTypedRuleContext(Type_defContext,0);
};

EntryContext.prototype.OPT = function() {
    return this.getToken(SKEMAParser.OPT, 0);
};

EntryContext.prototype.REF = function() {
    return this.getToken(SKEMAParser.REF, 0);
};

EntryContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterEntry(this);
	}
};

EntryContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitEntry(this);
	}
};




SKEMAParser.EntryContext = EntryContext;

SKEMAParser.prototype.entry = function() {

    var localctx = new EntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SKEMAParser.RULE_entry);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        _la = this._input.LA(1);
        if(_la===SKEMAParser.OPT) {
            this.state = 40;
            this.match(SKEMAParser.OPT);
        }

        this.state = 53;
        switch(this._input.LA(1)) {
        case SKEMAParser.KEY:
            this.state = 43;
            this.match(SKEMAParser.KEY);
            this.state = 44;
            this.match(SKEMAParser.DEFINE);
            this.state = 47;
            switch(this._input.LA(1)) {
            case SKEMAParser.OPEN_MAP:
            case SKEMAParser.OPEN_ARRAY:
            case SKEMAParser.ANY:
            case SKEMAParser.STRING:
            case SKEMAParser.FLOAT:
            case SKEMAParser.INTEGER:
            case SKEMAParser.BOOLEAN:
            case SKEMAParser.DATETIME:
                this.state = 45;
                this.type_def();
                break;
            case SKEMAParser.REF:
                this.state = 46;
                this.match(SKEMAParser.REF);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case SKEMAParser.DEF:
            this.state = 49;
            this.match(SKEMAParser.DEF);
            this.state = 50;
            this.match(SKEMAParser.KEY);
            this.state = 51;
            this.match(SKEMAParser.DEFINE);
            this.state = 52;
            this.type_def();
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

function Simple_type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKEMAParser.RULE_simple_type_def;
    return this;
}

Simple_type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_type_defContext.prototype.constructor = Simple_type_defContext;

Simple_type_defContext.prototype.ANY = function() {
    return this.getToken(SKEMAParser.ANY, 0);
};

Simple_type_defContext.prototype.STRING = function() {
    return this.getToken(SKEMAParser.STRING, 0);
};

Simple_type_defContext.prototype.INTEGER = function() {
    return this.getToken(SKEMAParser.INTEGER, 0);
};

Simple_type_defContext.prototype.FLOAT = function() {
    return this.getToken(SKEMAParser.FLOAT, 0);
};

Simple_type_defContext.prototype.BOOLEAN = function() {
    return this.getToken(SKEMAParser.BOOLEAN, 0);
};

Simple_type_defContext.prototype.DATETIME = function() {
    return this.getToken(SKEMAParser.DATETIME, 0);
};

Simple_type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterSimple_type_def(this);
	}
};

Simple_type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitSimple_type_def(this);
	}
};




SKEMAParser.Simple_type_defContext = Simple_type_defContext;

SKEMAParser.prototype.simple_type_def = function() {

    var localctx = new Simple_type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SKEMAParser.RULE_simple_type_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SKEMAParser.ANY) | (1 << SKEMAParser.STRING) | (1 << SKEMAParser.FLOAT) | (1 << SKEMAParser.INTEGER) | (1 << SKEMAParser.BOOLEAN) | (1 << SKEMAParser.DATETIME))) !== 0))) {
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

function Complex_type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKEMAParser.RULE_complex_type_def;
    return this;
}

Complex_type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Complex_type_defContext.prototype.constructor = Complex_type_defContext;

Complex_type_defContext.prototype.map = function() {
    return this.getTypedRuleContext(MapContext,0);
};

Complex_type_defContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

Complex_type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterComplex_type_def(this);
	}
};

Complex_type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitComplex_type_def(this);
	}
};




SKEMAParser.Complex_type_defContext = Complex_type_defContext;

SKEMAParser.prototype.complex_type_def = function() {

    var localctx = new Complex_type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SKEMAParser.RULE_complex_type_def);
    try {
        this.state = 59;
        switch(this._input.LA(1)) {
        case SKEMAParser.OPEN_MAP:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.map();
            break;
        case SKEMAParser.OPEN_ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
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

function MapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKEMAParser.RULE_map;
    return this;
}

MapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapContext.prototype.constructor = MapContext;

MapContext.prototype.OPEN_MAP = function() {
    return this.getToken(SKEMAParser.OPEN_MAP, 0);
};

MapContext.prototype.CLOSE_MAP = function() {
    return this.getToken(SKEMAParser.CLOSE_MAP, 0);
};

MapContext.prototype.entry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EntryContext);
    } else {
        return this.getTypedRuleContext(EntryContext,i);
    }
};

MapContext.prototype.SEPARATOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SKEMAParser.SEPARATOR);
    } else {
        return this.getToken(SKEMAParser.SEPARATOR, i);
    }
};


MapContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterMap(this);
	}
};

MapContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitMap(this);
	}
};




SKEMAParser.MapContext = MapContext;

SKEMAParser.prototype.map = function() {

    var localctx = new MapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SKEMAParser.RULE_map);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(SKEMAParser.OPEN_MAP);
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SKEMAParser.DEF) | (1 << SKEMAParser.OPT) | (1 << SKEMAParser.KEY))) !== 0)) {
            this.state = 62;
            this.entry();
            this.state = 63;
            this.match(SKEMAParser.SEPARATOR);
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 70;
        this.match(SKEMAParser.CLOSE_MAP);
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
    this.ruleIndex = SKEMAParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.OPEN_ARRAY = function() {
    return this.getToken(SKEMAParser.OPEN_ARRAY, 0);
};

ArrayContext.prototype.CLOSE_ARRAY = function() {
    return this.getToken(SKEMAParser.CLOSE_ARRAY, 0);
};

ArrayContext.prototype.type_def = function() {
    return this.getTypedRuleContext(Type_defContext,0);
};

ArrayContext.prototype.REF = function() {
    return this.getToken(SKEMAParser.REF, 0);
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitArray(this);
	}
};




SKEMAParser.ArrayContext = ArrayContext;

SKEMAParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SKEMAParser.RULE_array);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(SKEMAParser.OPEN_ARRAY);
        this.state = 75;
        switch(this._input.LA(1)) {
        case SKEMAParser.OPEN_MAP:
        case SKEMAParser.OPEN_ARRAY:
        case SKEMAParser.ANY:
        case SKEMAParser.STRING:
        case SKEMAParser.FLOAT:
        case SKEMAParser.INTEGER:
        case SKEMAParser.BOOLEAN:
        case SKEMAParser.DATETIME:
            this.state = 73;
            this.type_def();
            break;
        case SKEMAParser.REF:
            this.state = 74;
            this.match(SKEMAParser.REF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 77;
        this.match(SKEMAParser.CLOSE_ARRAY);
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

function Type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SKEMAParser.RULE_type_def;
    return this;
}

Type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_defContext.prototype.constructor = Type_defContext;

Type_defContext.prototype.simple_type_def = function() {
    return this.getTypedRuleContext(Simple_type_defContext,0);
};

Type_defContext.prototype.complex_type_def = function() {
    return this.getTypedRuleContext(Complex_type_defContext,0);
};

Type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.enterType_def(this);
	}
};

Type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SKEMAListener ) {
        listener.exitType_def(this);
	}
};




SKEMAParser.Type_defContext = Type_defContext;

SKEMAParser.prototype.type_def = function() {

    var localctx = new Type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SKEMAParser.RULE_type_def);
    try {
        this.state = 81;
        switch(this._input.LA(1)) {
        case SKEMAParser.ANY:
        case SKEMAParser.STRING:
        case SKEMAParser.FLOAT:
        case SKEMAParser.INTEGER:
        case SKEMAParser.BOOLEAN:
        case SKEMAParser.DATETIME:
            this.enterOuterAlt(localctx, 1);
            this.state = 79;
            this.simple_type_def();
            break;
        case SKEMAParser.OPEN_MAP:
        case SKEMAParser.OPEN_ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 80;
            this.complex_type_def();
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


exports.SKEMAParser = SKEMAParser;
