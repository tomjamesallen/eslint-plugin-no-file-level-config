/**
 * @fileoverview Warn of file level eslint rules.
 * @author Tom
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Warn of file level eslint rules.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        function checkComment(node) {
            var contents = node.value;
            var regExp = /^\s*eslint/gm;
            var matches = contents.match(regExp);

            if (Array.isArray(matches) && matches[0] && contents.indexOf(matches[0]) === 0) {
                context.report({
                    node,
                    message: "Cheeky inline eslint rules found...",
                    data: {}
                });
            }
        }

        return {
            BlockComment: checkComment
        };
    }
};
