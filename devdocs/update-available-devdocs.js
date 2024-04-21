#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
//──────────────────────────────────────────────────────────────────────────────

/** @type {Record<string, string>} */
const shortHands = {
	javascript: "js",
	typescript: "ts",
	python: "py",
	hammerspoon: "hs",
	markdown: "md",
};

// to be run from repo root
const paths = {
	infoPlist: "./info.plist",
	keywordSlugMap: "./devdocs/keyword-slug-map.json",
};

//──────────────────────────────────────────────────────────────────────────────

/** @param {string} url @return {string} */
function httpRequest(url) {
	const queryURL = $.NSURL.URLWithString(url);
	const data = $.NSData.dataWithContentsOfURL(queryURL);
	return $.NSString.alloc.initWithDataEncoding(data, $.NSUTF8StringEncoding).js;
}

/** @param {string} filepath @param {string} text */
function writeToFile(filepath, text) {
	const str = $.NSString.alloc.initWithUTF8String(text);
	str.writeToFileAtomicallyEncodingError(filepath, true, $.NSUTF8StringEncoding, null);
}

/** @param {string} path */
function readFile(path) {
	const data = $.NSFileManager.defaultManager.contentsAtPath(path);
	const str = $.NSString.alloc.initWithDataEncoding(data, $.NSUTF8StringEncoding);
	return ObjC.unwrap(str);
}

//──────────────────────────────────────────────────────────────────────────────


// biome-ignore lint/correctness/noUnusedVariables: Alfred run
function run() {
	const response = JSON.parse(httpRequest("https://devdocs.io/docs.json"));

	// convert to hashmap to remove duplicates
	/** @type {Record<string, string>} */
	const allLangs = {};
	const noneItem = "<array> <string>-----</string> <string></string> </array>";
	const infoPlistPopup = [noneItem];
	for (const lang of response) {
		// langs json
		const id = lang.slug.replace(/~.*/, "");
		const keyword = shortHands[id] || id;
		if (allLangs[keyword]) continue; // do not add old versions of the same language
		allLangs[keyword] = lang.slug;

		// xml
		const keywordInfo = keyword !== id ? ` (keyword: ${keyword})` : "";
		const line = `<array> <string>${id}${keywordInfo}</string> <string>${keyword}</string> </array>`;
		infoPlistPopup.push(line);
	}

	writeToFile(paths.keywordSlugMap, JSON.stringify(allLangs));

	// update `info.plist` to insert all languages as options
	const xmlLines = readFile(paths.infoPlist).split("\n");

	// create multiple popups to select in Alfred config
	const popupNumber = 20;
	/** @type {string[]} */
	let newXmlLines = [];
	for (let i = 1; i <= popupNumber; i++) {
		const label = i === 1 ? "Enabled devdocs" : "";
		newXmlLines = newXmlLines.concat([
			"<dict> <key>config</key> <dict> <key>default</key> <string></string> <key>pairs</key> <array>",
			...infoPlistPopup,
			`</array> </dict> <key>description</key> <string></string> <key>label</key> <string>${label}</string> <key>type</key> <string>popupbutton</string> <key>variable</key> <string>keyword_${i}</string> </dict>`,
		]);
	}

	const start = xmlLines.indexOf("\t<key>userconfigurationconfig</key>") + 2;
	const end = xmlLines.indexOf("\t</array>", start);
	xmlLines.splice(start, end - start, ...newXmlLines);
	writeToFile(paths.infoPlist, xmlLines.join("\n"));
}
