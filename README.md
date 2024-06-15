<!-- LTeX: enabled=false -->
# Search ALL the docs
<!-- LTeX: enabled=true -->
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
- [Extras](#extras)
   * [Documentation sites](#documentation-sites)
   * [Utilities](#utilities)
- [Reload Caches](#reload-caches)
- [Maintenance Notes](#maintenance-notes)
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
2. The replacements take the form `alfred_keyword:pinned_version`, one version
   change per line. For example to pin the `node` and `python` versions:

   ```
   node:node~18_lts
   ```

   ```
   py:python~3.11
   ```

3. The versions available are listed under the key `slug` in [this json
   file](https://devdocs.io/docs.json).
4. Afterward, reload the caches via the Alfred keyword `:docs-reload` once to
   ensure the new versions are used.

### Icons
Search icons for specific documentation sites are provided by adding a file to
the directory `./devdocs/icons/{keyword}.png`. PRs are welcome.

## Extras

### Documentation sites
- `biome`: biome docs & rules
- `ruff`: ruff docs & rules
- `sc`: shellcheck wiki
- `pandoc`: pandoc user manual
- `man`: man pages at [mankier.com](https://www.mankier.com/)
- `wt`: WezTerm docs
- `cani`: caniuse.com
- `just`: [just (task runner) docs](https://just.systems/man/en/)

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

## Reload Caches
In case of a recent change to a documentation site, you can manually trigger
refreshing the cache via the Alfred keyword `:docs-reload`.

## Maintenance Notes
1. The workflow automatically updates to the latest *version* of
   documentation sites available on DevDocs twice per month via [GitHub
   Action](https://github.com/chrisgrieser/alfred-docs-searches/blob/main/.github/workflows/update-available-devdocs.yml).
   (It may take an extra week for the Alfred cache to update as well, if not
   done manually via `:docs-reload`.)
2. These updates run purely on the GitHub remote repo and do not need a new
   version of the workflow or any other kind of manual action.

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
