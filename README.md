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

1. Run `composer require islandora/cca_base`
1. Credentials are stored in `pview -d devs sfu`

### Create subtheme

1. Go to `themes/contrib/cca_base/subtheme`
1. Make script executable
   ```bash
   chmod +x scripts/create_subtheme.sh
   ```
1. Run script with interactive prompts
   ```bash
   ./scripts/create_subtheme.sh
   ```

### Setup dev env

1. Go to `themes/custom/your_theme`
1. Run `npm install`

### Gulp commands

#### `gulp styles`

Compiles scss to css.

#### `gulp watch`

Compiles scss to css, then watchs for scss changes and recompiles automatically.

### Enable subtheme

Once you have finished creating your SubTheme, enable it in `/admin/appearance`.

## Features / Pages

- Block layout

## Versioning

This project is versioned using semver. Use git tag for versioning.

## Updating base theme in the project using this theme

To update, run `composer require islandora/cca_base`. This will update if there is a new tag.
Note that `composer update` somehow doesn't get the new version. Use `composer require`.
