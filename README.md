# tailwindcss-animate-from-to

[![License][license-badge]](LICENSE)
[![NPM Version][npm-version-badge]][npm-package]

A [Tailwind CSS](https://tailwindcss.com) plugin for creating custom animations using `from` and `to` keyframes.

## Installation

Install the plugin from npm:

```shell
npm install -D tailwindcss-animate-from-to
```

Then, add the plugin to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwindcss-animate-from-to"),
    // ...
  ],
};
```

## Usage

### Opacity

The plugin defines a `from` and `to` keyframe for the `opacity` property, equivalent to:

```css
@keyframes opacity {
  from {
    opacity: var(--tw-opacity-from);
  }
  to {
    opacity: var(--tw-opacity-to);
  }
}
```

#### Utilities

- `.animate-opacity`: Enable the `opacity` animation.
- `.opacity-from-{value}`: Sets the starting opacity (taken from [theme(opacity)](https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js#L703) or arbitrary value).
- `.opacity-to-{value}`: Sets the ending opacity.

#### Example

```html
<div class="animate-opacity opacity-from-0 opacity-to-100">Hello, world!</div>
```

### Shadow

The plugin defines a `from` and `to` keyframe for the `box-shadow` property, equivalent to:

```css
@keyframes shadow {
  from {
    box-shadow: var(--tw-shadow-from);
  }
  to {
    box-shadow: var(--tw-shadow-to);
  }
}
```

#### Utilities

- `.animate-shadow`: Enable the `box-shadow` animation.
- `.shadow-from-{value}`: Sets the starting shadow (taken from [theme(boxShadow)](https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js#L108) or arbitrary value).
- `.shadow-to-{value}`: Sets the ending shadow.

#### Example

```html
<div class="animate-shadow shadow-from-md shadow-to-lg">Hello, world!</div>
```

### Transform

The plugin defines a `from` and `to` keyframe for the `transform` property with transform functions: [scale](https://tailwindcss.com/docs/scale), [rotate](https://tailwindcss.com/docs/rotate), [translate](https://tailwindcss.com/docs/translate), and [skew](https://tailwindcss.com/docs/skew), equivalent to:

```css
@keyframes transform {
  from {
    transform: "translateX(var(--tw-translate-x-from, 0)) translateY(var(--tw-translate-y-from, 0)) rotate(var(--tw-rotate-from, 0)) skewX(var(--tw-skew-x-from, 0)) skewY(var(--tw-skew-y-from, 0)) scaleX(var(--tw-scale-x-from, 1)) scaleY(var(--tw-scale-y-from, 1))";
  }
  to {
    transform: "translateX(var(--tw-translate-x-to, 0)) translateY(var(--tw-translate-y-to, 0)) rotate(var(--tw-rotate-to, 0)) skewX(var(--tw-skew-x-to, 0)) skewY(var(--tw-skew-y-to, 0)) scaleX(var(--tw-scale-x-to, 1)) scaleY(var(--tw-scale-y-to, 1))";
  }
}
```

#### Utilities

- `.animate-transform`: Enable the `transform` animation. All variables are set to `0` (or `1` for scale).
- `.translate-x-from-{value}`: Sets the starting translateX (taken from [theme(translate)](https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js#L963) or arbitrary value).
- `.translate-x-to-{value}`: Sets the ending translateX.
- `.translate-y-from-{value}`: Sets the starting translateY.
- `.translate-y-to-{value}`: Sets the ending translateY.
- `.rotate-from-{value}`: Sets the starting rotate (taken from [theme(rotate)](https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js#L785) or arbitrary value).
- `.rotate-to-{value}`: Sets the ending rotate.
- `.skew-x-from-{value}`: Sets the starting skewX (taken from [theme(skew)](https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js#L830) or arbitrary value).
- `.skew-x-to-{value}`: Sets the ending skewX.
- `.skew-y-from-{value}`: Sets the starting skewY.
- `.skew-y-to-{value}`: Sets the ending skewY.
- `.scale-x-from-{value}`: Sets the starting scaleX (taken from [theme(scale)](https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js#L803) or arbitrary value).
- `.scale-x-to-{value}`: Sets the ending scaleX.
- `.scale-y-from-{value}`: Sets the starting scaleY.
- `.scale-y-to-{value}`: Sets the ending scaleY.

#### Example

```html
<div
  class="animate-transform translate-x-from-0 translate-x-to-10 rotate-from-0 rotate-to-360"
>
  Hello, world!
</div>
```

## License

This project is licensed under the [MIT license](LICENSE).

<!-- Badges -->

[license-badge]: https://img.shields.io/github/license/jeremy-code/tailwindcss-animate-from-to
[npm-version-badge]: https://img.shields.io/npm/v/tailwindcss-animate-from-to
[npm-package]: https://npmjs.com/package/tailwindcss-animate-from-to
