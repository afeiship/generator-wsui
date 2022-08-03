# <%= project_name %>
> <%= description %>

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @<%= scope %>/<%= project_name %>
```

## usage
```scss
// use sass
@import '~@<%= scope %>/<%= project_name %>/dist/index.scss';
// use css
@import '~@<%= scope %>/<%= project_name %>/dist/style.css';
```

## preview
- https://afeiship.github.io/<%= project_name %>/

## license
Code released under [the MIT license](https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@<%= scope %>/<%= project_name %>
[version-url]: https://npmjs.org/package/@<%= scope %>/<%= project_name %>

[license-image]: https://img.shields.io/npm/l/@<%= scope %>/<%= project_name %>
[license-url]: https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@<%= scope %>/<%= project_name %>
[size-url]: https://github.com/afeiship/<%= project_name %>/blob/master/dist/<%= project_name %>.min.js

[download-image]: https://img.shields.io/npm/dm/@<%= scope %>/<%= project_name %>
[download-url]: https://www.npmjs.com/package/@<%= scope %>/<%= project_name %>

