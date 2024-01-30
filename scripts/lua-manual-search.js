#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
//──────────────────────────────────────────────────────────────────────────────

/** @param {string} str */
function alfredMatcher(str) {
	const clean = str.replace(/[-()_.:#/\\;,[\]]/g, " ");
	const camelCaseSeparated = str.replace(/([A-Z])/g, " $1");
	return [clean, camelCaseSeparated, str].join(" ");
}

//──────────────────────────────────────────────────────────────────────────────

/** @type {AlfredRun} */
// biome-ignore lint/correctness/noUnusedVariables: Alfred run
function run() {
	const luaVersion = $.getenv("lua_version");
	const luaManualBaseURL = `https://lua.org/manual/${luaVersion}/`;

	const rawHTML = app.doShellScript(`curl -sL '${luaManualBaseURL}'`);
	const ahrefRegex = /.*?href="(.*?)">(.*?)<.*/i;

	const sites = rawHTML
		.split("\r")
		.filter(
			(line) =>
				line.toLowerCase().includes("href") && !line.includes("css") && !line.includes("IMG"),
		)
		.map((line) => {
			const subsite = line.replace(ahrefRegex, "$1");
			const url = luaManualBaseURL + subsite;
			const title = line
				.replace(ahrefRegex, "$2")
				.replaceAll("&ndash; ", "")
				.replace(/^[.0-9]+ /, "");
			if (title.includes(">")) return {};

			return {
				title: title,
				match: alfredMatcher(title),
				arg: url,
				uid: url,
			};
		});

	return JSON.stringify({ items: sites });
}
