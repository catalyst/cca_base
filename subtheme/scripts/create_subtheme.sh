#!/bin/bash
# Script to quickly create sub-theme.

echo '
+------------------------------------------------------------------------+
| With this script you could quickly create cca_base sub-theme           |
| In order to use this:                                                  |
| - cca_base theme (this folder) should be in the contrib folder         |
+------------------------------------------------------------------------+
'
echo 'The machine name of your custom theme? [e.g. mycustom_islandora]'
read CUSTOM_ISLANDORA

echo 'Your theme name ? [e.g. My custom Islandora]'
read CUSTOM_ISLANDORA_NAME

# Current path should be themes/contrib/cca_base/subtheme
if [[ ! -e ../../../custom ]]; then
    mkdir ../../../custom
fi
cd ../../../custom
cp -r ../contrib/cca_base/subtheme $CUSTOM_ISLANDORA
cd $CUSTOM_ISLANDORA
for file in *cca_subtheme.*; do mv $file ${file//cca_subtheme/$CUSTOM_ISLANDORA}; done
for file in config/*/*cca_subtheme*; do mv $file ${file//cca_subtheme/$CUSTOM_ISLANDORA}; done

# Remove create_subtheme.sh file, we do not need it in customized subtheme.
rm scripts/create_subtheme.sh

# mv {_,}$CUSTOM_ISLANDORA.theme
grep -Rl cca_subtheme .|xargs sed -i -e "s/cca_subtheme/$CUSTOM_ISLANDORA/"
sed -i -e "s/CCA Islandora Subtheme Starter Kit/$CUSTOM_ISLANDORA_NAME/" $CUSTOM_ISLANDORA.info.yml
echo "# Check the themes/custom folder for your new sub-theme."