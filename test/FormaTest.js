let assert = require("assert"); // node.js core module
let T = require('../src/Forma.js');

describe('Types', function(){
    describe('getTypes', function(){
        it('should return string when string is present', function(){
            assert.equal("String", T.getTypes("test"));
        })
    });
    describe('checkTypesTrue', function(){
        it('should return true when string is present', function(){
            assert.equal(true, T.checkTypes("test", "String"));
        })
    });
    describe('checkTypesFalse', function(){
        it('should return false when string not present', function(){
            assert.equal(false, 0);
        })
    });
    describe('getFunctionNames', function(){
        it('should return the function name', function(){
            let testFuncName = function () {
                return T.getFunctionNames(arguments);
            };
            assert.equal("testFuncName", testFuncName());
        })
    });
    describe('getFunctionArgs', function(){
        it('should return the function arguments', function(){
            let testFuncArg = function (one, two) {
                return T.getFunctionArguments(arguments);
            };
            assert.equal("one,two", testFuncArg("one", 'two'));
            assert.equal(7, testFuncArg("one", 'two').length);
        })
    });
});