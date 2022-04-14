# tailwindcss table padding plugin
This plugin helps you to add paddings to your tables easily :)

### Initial setup
First of all add the plugin to the "tailwind.config.js" file :
```javascript
// tailwind.config.js
module.exports = {
  content: ['...'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-table-padding')],
};
```

### classes usage
```html
<!-- standard padding -->
<table class="p-table-2"></table>
<!-- X axis -->
<table class="px-table-2"></table>
<!-- Y axis -->
<table class="py-table-2"></table>
<!-- X , Y axis -->
<table class="px-table-2 py-table-2"></table>
```

#### example :
```html
<table class="py-table-2 px-table-4">
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>...</td>
      </tr>

      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
```
### customization
By default this plugin uses default tailwind spacing
```html
<table class="p-table-[spacing]"></table>
```
But you can still use your own spacing by changing the "tablePadding" property :
```javascript
// tailwind.config.js
module.exports = {
  content: ['...'],
  theme: {
    extend: {},
    tablePadding: {
      1: '1rem',
      2: '2rem',
      3: '3rem',
    },
  },
  plugins: [require('tailwind-table-padding')],
};
```
