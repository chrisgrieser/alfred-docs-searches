#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;

//──────────────────────────────────────────────────────────────────────────────

/** @type {AlfredRun} */
// rome-ignore lint/correctness/noUnusedVariables: Alfred run
function run() {
	/** @type AlfredItem[] */
	const scriptFilterArr = app
		.doShellScript(`find \
			'/Applications' \
			"$HOME/Applications" \
			'/System/Applications' \
			'/System/Library/CoreServices' \
			'/System/Library/ScriptingAdditions' \
			-path '*/Contents/Resources/*.sdef'
		`)
		.split("\r")
		.map((sdefPath) => {
			const appPath = sdefPath.replace(/(.*\/.*?\.(?:app|osax))\/.*\.sdef/, "$1");
			const appName = appPath.split("/").pop().slice(0, -4);
			return {
				title: appName,
				icon: { path: appPath, type: "fileicon"},
				arg: sdefPath,
			};
		});
	return JSON.stringify({ items: scriptFilterArr });
}
