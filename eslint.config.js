import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ["./coverage"]
  },
  pluginJs.configs.recommended,
];