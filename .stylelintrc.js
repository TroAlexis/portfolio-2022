"use strict";

module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-rational-order",
        "stylelint-config-prettier-scss",
    ],
    rules: {
        "selector-pseudo-class-no-unknown": [
            true,
            { ignorePseudoClasses: ["global"] },
        ],
    },
};
