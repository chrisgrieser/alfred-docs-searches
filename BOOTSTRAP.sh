#!/usr/bin/env zsh

set -e # abort when any command errors, prevents this script from self-removing at the end if anything went wrong

# plugin name is the same as the git repo name and can therefore be inferred
repo=$(git remote -v | head -n1 | sed 's/\.git.*//' | sed 's/.*://')
id=$(echo "$repo" | cut -d/ -f2)
name=$(echo "$id" | tr "-" " ")

# desc can be inferred from github description (not using jq for portability)
desc=$(curl -sL "https://api.github.com/repos/$repo" | grep "description" | head -n1 | cut -d'"' -f4)

# current year for license
year=$(date +"%Y")

#───────────────────────────────────────────────────────────────────────────────

LC_ALL=C # prevent byte sequence error

# replace them all
# $1: placeholder name as {{mustache-template}}
# $2: the replacement
function replacePlaceholders() {

	# INFO macOS' sed requires `sed -i ''`, remove the `''` when on Linux or using GNU sed
	find . -type f -not -path '*/\.git/*' -not -name ".DS_Store" -exec sed -i '' "s/$1/$2/g" {} \;
}

replacePlaceholders "{{workflow-id}}" "$id"
replacePlaceholders "{{workflow-name}}" "$name"
replacePlaceholders "{{workflow-description}}" "$desc"
replacePlaceholders "{{year}}" "$year"

#───────────────────────────────────────────────────────────────────────────────

mkdir ./assets # for showcase.png
print "\033[1;32mSuccess. Script will delete itself."

#───────────────────────────────────────────────────────────────────────────────

# open links
sleep 1
open "https://www.alfredforum.com/forum/51-submit-your-workflows-to-alfred-gallery/?do=add"
osascript -e 'display notification "" with title "ℹ️ Write permissions for workflows needed."'
open "https://github.com/$repo/settings/actions"

# make this script delete itself
rm -- "$0"
