// https://prettier.io/docs/configuration#basic-configuration
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  // https://prettier.io/docs/en/options
  // experimentalTernaries: false,
  // experimentalOperatorPosition: "end",
  // printWidth: 80,
  // tabWidth: 2,
  // useTabs: false,
  // semi: true,
  // singleQuote: false,
  // quoteProps: "as-needed",
  // jsxSingleQuote: false,
  // trailingComma: "all",
  // bracketSpacing: true,
  // objectWrap: "preserve",
  // bracketSameLine: false,
  // arrowParens: "always",
  // rangeStart: 0,
  // rangeEnd: Infinity,
  // parser: undefined,
  // filepath: undefined,
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: "preserve",
  // htmlWhitespaceSensitivity: "css",
  // vueIndentScriptAndStyle: false,
  endOfLine: "auto",
  // embeddedLanguageFormatting: "auto",
  singleAttributePerLine: true,
  //
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
