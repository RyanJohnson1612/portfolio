module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? 1 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 1 : 0,
    "no-unused-vars": process.env.NODE_ENV === "production" ? 1 : 0,
    'prettier/prettier': 0,
    "no-constant-condition": process.env.NODE_ENV === "production" ? 1 : 0,
  },
};
