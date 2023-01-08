"use strict";

const camelcaseRegex = /^[a-z][A-Za-z]*$/;

const selectorPatternOptions = [
  camelcaseRegex,
  {
    resolveNestedSelectors: true,
    message: "Expected selector to be camelCase",
  },
];

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
    "selector-class-pattern": selectorPatternOptions,
    "selector-id-pattern": selectorPatternOptions,
  },
};
