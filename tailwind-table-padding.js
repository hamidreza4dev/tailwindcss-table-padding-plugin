const plugin = require('tailwindcss/plugin');
const theme = require('tailwindcss/defaultTheme');

const tablePadding = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme('tablePadding');
    var utilities = Object.entries(values).map(([key, value]) => {
      return {
        [`.${e(`p-table-${key}`)} th, .${e(`p-table-${key}`)} td`]: { padding: `${value}` },
        [`.${e(`px-table-${key}`)} th`]: { 'padding-left': `${value}`, 'padding-right': `${value}` },
        [`.${e(`px-table-${key}`)} td`]: { 'padding-left': `${value}`, 'padding-right': `${value}` },
        [`.${e(`py-table-${key}`)} th`]: { 'padding-top': `${value}`, 'padding-bottom': `${value}` },
        [`.${e(`py-table-${key}`)} td`]: { 'padding-top': `${value}`, 'padding-bottom': `${value}` },
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
