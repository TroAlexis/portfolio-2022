"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier-scss",
  ],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
  },
};
