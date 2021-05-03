# Catalyst Islandora base theme

This is a subtheme of Catalyst Islandora base theme (https://github.com/catalyst/cca_base)

## Updating base theme

To update, run `composer require islandora/cca_base`. This will update if there is a new tag.
Note that `composer update` somehow doesn't get the new version. Use `composer require`.

## Theming

### Prerequisites

* Node ^14.0.0
* npm ^6.0.0

### Setup dev env

This will install the tooling for compiling scss.

1. Go to `themes/custom/your_theme`
1. Run `npm install`
1. Install gulp if not already: `npm install --global gulp-cli`

### Gulp commands for compiling css

#### `gulp styles`

Compiles scss to css.

#### `gulp styles:watch`

Compiles scss to css, then watchs for scss changes and recompiles automatically.

### Basic theming

- Replace `favicon.ico` and `logo.svg`
- Define colours and other bootstrap variables that you want to override in `scss/_variables.scss`
- Define typography in `scss/_typography.scss`
- Additional stylings go to `scss/style.scss` (or split files if necessary)
- Compile scss to css (see below)
- Add custom templates in `templates` folder
- Don't forget to `drush cr`
