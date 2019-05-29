/**
 *  Classes to do some type checking
 *
 *
 */
let Forma = {};



    /**
     * Function to get the types
     *
     * https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
     */
    Forma.getTypes = function(checkData) {
        return ({}).toString.call(checkData).split(' ')[1].replace(']', '');
    };

    Forma.checkTypes = function (checkData, typeToAssert) {
        if (this.getTypes(checkData) == typeToAssert) return true;

        return false;
    };

    /**
     * Function takes the arguments JavaScript call
     */
    Forma.getFunctionNames= function (args) {
        return args.callee.name;
    };

    /**
     * Function gets the argument for the function being called
     */
    Forma.getFunctionArguments = function (args) {
        arg = [];
        for (let i=0; i<args.callee.length; i++) {
            arg.push(args[i])
        }
        return arg.join();
    };

module.exports = Forma;
