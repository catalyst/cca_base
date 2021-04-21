# Build subset of Fontawesome icons

Based on https://www.justin.ly/tree-shaking-fontawesome-5-icons/ with updates in obsolete parts.

Also see:  
https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core

## Setup

Run `npm install`

## Edit

Edit `src/index.js` and add the icons you want to use.

## Build

Run `npm run build`. You'll find the built file in `dist/fontawesome.js`.

## Use

Copy the built file to your theme's `js` folder. Include it in the theme libraries.
