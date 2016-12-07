/**
 * @fileoverview Warn of file level eslint rules.
 * @author Tom
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-file-level-config"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-file-level-config", rule, {

    valid: [
        "// eslint",
        `
            /*
                sseslint
            */
        `
    ],

    invalid: [
        {
            code: `
                /*
                    eslint
                */
            `,
            errors: [{
                message: "Cheeky inline eslint rules found...",
                type: "Block"
            }]
        },
        {
            code: `
                /* eslint */
            `,
            errors: [{
                message: "Cheeky inline eslint rules found...",
                type: "Block"
            }]
        }
    ]
});
