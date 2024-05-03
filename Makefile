.PHONY: transfer-local-files release update
#───────────────────────────────────────────────────────────────────────────────

transfer-local-files:
	workflow_id=$$(basename "$$PWD") && \
	prefs_location=$$(grep "5" "$$HOME/Library/Application Support/Alfred/prefs.json" | cut -d'"' -f4 | sed -e 's|\\/|/|g' -e "s|^~|$$HOME|") && \
	local_workflow="$$prefs_location/Alfred.alfredpreferences/workflows/$$workflow_id" && \
	rsync --archive --delete --exclude-from="$$PWD/.rsync-exclude" "$$local_workflow/" "$$PWD" ; \
	git status --short

update:
	node ./devdocs/update-available-devdocs.mjs && echo "Devdocs updated."

release:
	zsh ./.build-and-release.sh
