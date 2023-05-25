const plugin = require("tailwindcss/plugin");
const theme = require("tailwindcss/defaultTheme");

// prettier-ignore
const tablePadding = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme('tablePadding');
    var utilities = Object.entries(values).map(([key, value]) => {
      return {
        [`.${e(`p-table-${key}`)} th, .${e(`p-table-${key}`)} td`]: { padding: `${value}` },
        [`.${e(`px-table-${key}`)} th, .${e(`px-table-${key}`)} td`]: { 'padding-left': `${value}`, 'padding-right': `${value}` },
        [`.${e(`py-table-${key}`)} th, .${e(`py-table-${key}`)} td`]: { 'padding-top': `${value}`, 'padding-bottom': `${value}` },
        [`.${e(`pl-table-${key}`)} th, .${e(`pl-table-${key}`)} td`]: { 'padding-left': `${value}`},
        [`.${e(`pr-table-${key}`)} th, .${e(`pr-table-${key}`)} td`]: { 'padding-right': `${value}` },
        [`.${e(`pt-table-${key}`)} th, .${e(`pt-table-${key}`)} td`]: { 'padding-top': `${value}`},
        [`.${e(`pb-table-${key}`)} th, .${e(`pb-table-${key}`)} td`]: { 'padding-bottom': `${value}` },
      };
    });
    addUtilities(utilities);
  },
  {
    theme: {
      tablePadding: {
        ...theme.spacing,
      },
    },
  }
);
module.exports = tablePadding;
