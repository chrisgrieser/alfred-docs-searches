# Search ALL the docs
![Download count](https://img.shields.io/github/downloads/chrisgrieser/alfred-docs-searches/total?label=Total%20Downloads&style=plastic)
![Latest release](https://img.shields.io/github/v/release/chrisgrieser/alfred-docs-searches?label=Latest%20Release&style=plastic)

Search hundreds of documentation sites from DevDocs and other sources via
Alfred.

<img alt="Showcase" width=70% src="https://github.com/chrisgrieser/alfred-docs-searches/assets/73286100/5113c565-4f1a-49a8-842c-271255ee08f2">

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [DevDocs](#devdocs)
   * [Usage](#usage)
   * [Pinning specific versions](#pinning-specific-versions)
   * [Icons](#icons)
- [Extras](#extras)
   * [Documentation sites](#documentation-sites)
   * [Utilities](#utilities)
- [Reload caches](#reload-caches)
- [Maintenance notes](#maintenance-notes)
- [About the developer](#about-the-developer)

<!-- tocstop -->

## Installation
[➡️ Download the latest release.](https://github.com/chrisgrieser/alfred-docs-searches/releases/latest)

## DevDocs
Enable the devdocs you want to use in the workflow configuration. The
enabled devdocs are searched by using the name as keyword, for example `haskell
foobar` to search the Haskell DevDocs for "foobar."

A few common languages have short-hands noted in the popup selection, such as
`js` for JavaScript. In this case, you use `js foobar` to search instead.

### Usage
- <kbd>⏎</kbd>: Open the documentation site.
- <kbd>⌥</kbd><kbd>⏎</kbd>: Copy the URL of the documentation site to the clipboard.

### Pinning specific versions
1. In the workflow configuration, go to the `pinned devdocs versions` section.
   (Depending on your screen height, you might need to scroll down.)
2. The versions available are listed under the key `slug` in [this json
   file](https://devdocs.io/docs.json).
3. The replacements take the form `alfred_keyword:pinned_version`, one version
   change per line. For example, to pin the `node` and `python` use:

   ```
   node:node~18_lts
   ```

   ```
   py:python~3.11
   ```

4. Afterward, reload the caches via the Alfred keyword `:docs-reload` to ensure
   the new versions are used.

### Icons
Search icons for specific documentation sites are provided by adding a file to
the directory `./devdocs/icons/{keyword}.png`. PRs are welcome.

## Extras

### Documentation sites
- `biome`: biome docs & rules
- `ruff`: ruff docs & rules
- `sc`: shellcheck wiki
- `pandoc`: pandoc user manual
- `wt`: WezTerm docs
- `just`: [just (task runner) docs](https://just.systems/man/en/)
- `yq`: yq docs
- `oh`: Obsidian help
- `odd`: Obsidian developer docs

### Utilities
- `color`: named CSS colors
- `keycode`: macOS keycodes
    * <kbd>⏎</kbd>: Copy keycode
    * <kbd>⌥</kbd><kbd>⏎</kbd>: Copy AppleScript
- `appid`: app-id of installed macOS apps
- `win`: window information for the frontmost app
- `http`: HTTP status codes
- `as`: AppleScript Dictionaries of installed apps
- `sound`: macOS System Sounds
    * <kbd>⏎</kbd>: Preview (technically: Pre-listen)
    * <kbd>⌥</kbd><kbd>⏎</kbd>: Copy sound path
- Get the Uniform Type Identifier (UTI) of a selected file via the [Universal
  Action](https://www.alfredapp.com/help/workflows/triggers/universal-actions/).

## Reload caches
In case of a recent change to a documentation site, you can manually trigger
refreshing the cache via the Alfred keyword `:docs-reload`.

## Maintenance notes
1. **Remote**: Twice per month, a [GitHub
   Action](https://github.com/chrisgrieser/alfred-docs-searches/blob/main/.github/workflows/update-available-devdocs.yml)
   is run that checks for devdocs updates. If updates are found, the
   [keyword-slug-map](https://github.com/chrisgrieser/alfred-docs-searches/blob/main/.github/keyword-slug-map.json)
   available on this GitHub remote is updated. The `info.plist` is also updated
   in case not only a new version, but an entirely new documentation site
   becomes available.
2. **Local**: Every week, the locally available workflow fetches an update from
   the `keymap-slug-map` and the `info.plist` files from the GitHub remote. The update to the
   `info.plist` is required, so that newly available documentation sites also
   show up in the dropdown menus of the workflow configuration.
3. This means that any devdocs update is available to the user at most after
   three weeks. (The local cache can be manually updated via the Alfred keyword
   via `:docs-reload` to remove the seven-day delay.)
4. The purpose of this setup is to fully automate the process of making devdocs
   updates available to the user without requiring manual action. Furthermore,
   no separate release of the workflow is required.

<!-- vale Google.FirstPerson = NO -->
## About the developer
In my day job, I am a sociologist studying the social mechanisms underlying the
digital economy. For my PhD project, I investigate the governance of the app
economy and how software ecosystems manage the tension between innovation and
compatibility. If you are interested in this subject, feel free to get in touch.

- [Academic Website](https://chris-grieser.de/)
- [Mastodon](https://pkm.social/@pseudometa)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'>
<img
	height='36'
	style='border:0px;height:36px;'
	src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3'
	border='0'
	alt='Buy Me a Coffee at ko-fi.com'
/></a>
