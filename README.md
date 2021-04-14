# Catalyst Islandora base theme

## Setup

### Install base theme to your project

1. Open `composer.json` in your project root, add following repository in `repositories` array

   ```json
   "repositories": [
       ...
       {
           "type": "vcs",
           "url": "https://gitlab.catalyst.net.nz/islandora/cca-base.git"
       },
       ...
   ]
   ```

1. Run `composer require islandora/cca_base`. You will be asked for username and password. Find them in `pview -d devs sfu`.

### Create subtheme

1. Go to `themes/contrib/cca_base/subtheme`
1. Make script executable
   ```bash
   chmod +x scripts/create_subtheme.sh
   ```
1. Run script. You will be asked to enter the subtheme name. The subtheme will be created under `themes/custom/{subtheme_name}`.
   ```bash
   ./scripts/create_subtheme.sh
   ```

### Enable subtheme

Once you have finished creating your subtheme, enable it in `/admin/appearance`.

### Updating base theme

To update, run `composer require islandora/cca_base`. This will update if there is a new tag.
Note that `composer update` somehow doesn't get the new version. Use `composer require`.

## Theming

### Setup dev env

This will install the tooling for compiling scss.

1. Go to `themes/custom/your_theme`
1. Run `npm install`
1. Install gulp if not already: `npm install --global gulp-cli`

### Basic theming

- Replace `favicon.ico` and `logo.svg`
- Define colours and other bootstrap variables that you want to override in `scss/_variables.scss`
- Define typography in `scss/_typography.scss`
- Additional stylings go to `scss/style.scss` (or split files if necessary)
- Compile scss to css (see below)
- Add custom templates in `templates` folder
- Don't forget to `drush cr`

### Gulp commands for compiling css

#### `gulp styles`

Compiles scss to css.

#### `gulp styles:watch`

Compiles scss to css, then watchs for scss changes and recompiles automatically.
