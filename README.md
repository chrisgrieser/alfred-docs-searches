<!-- LTeX: enabled=false -->
# Search ALL the docs
<!-- LTeX: enabled=true -->
![Download count](https://img.shields.io/github/downloads/chrisgrieser/alfred-docs-searches/total?label=Total%20Downloads&style=plastic)
![Latest release](https://img.shields.io/github/v/release/chrisgrieser/alfred-docs-searches?label=Latest%20Release&style=plastic)

Search hundreds of documentation sites from DevDocs and other sources via
Alfred.

<img src="./assets/showcase git.png" alt="showcase git" width="50%">

<img src="./assets/showcase pandoc.png" alt="showcase Pandoc" width="50%">

## Table of Contents

<!-- toc -->

- [DevDocs](#devdocs)
- [Extras](#extras)
  * [Documentation sites](#documentation-sites)
  * [Utilities](#utilities)
  * [Reload caches](#reload-caches)
- [Installation](#installation)
- [About the developer](#about-the-developer)

<!-- tocstop -->

## DevDocs
In the configuration to the left, select the devdocs you'd like to search. The
enabled devdocs are searched by using the name as keyword, for example `angular
foobar` to search the Angular DevDocs for "foobar".

A few common languages have short-hands noted in the popup selection, such as
`js` for JavaScript. In this case, you use `js foobar` to search instead.

For offline availability, [install the documentations as explained at the
DevDocs](https://devdocs.io/offline).

**Usage**
- <kbd>⏎</kbd>: Open the documentation site.
- <kbd>⌥</kbd><kbd>⏎</kbd>: Copy the URL of the documentation site to the clipboard.

## Extras

### Documentation sites
- `biome`: biome docs & rules
- `ruff`: ruff docs & rules
- `sc`: shellcheck wiki
- `pandoc`: pandoc user manual
- `man`: man pages at [mankier.com](https://www.mankier.com/)
- `wt`: WezTerm docs

### Utilities
- `col`: named CSS colors
- `keycode`: macOS keycodes
- `appid`: app-id of installed macOS apps
- `win`: window information for the frontmost app
- `http`: HTTP status codes
- `as`: AppleScript Dictionaries of installed apps
- `sound`: Preview (pre-listen, technically) macOS System Sounds
- Get the Uniform Type Identifier (UTI) of a selected file via the [Universal Action](https://www.alfredapp.com/help/workflows/triggers/universal-actions/)

### Reload caches
The search indexes that are *not* from DevDocs are cached. In case of a recent change to a documentation site, you can manually trigger refreshing the cache via the Alfred keyword `:docs-reload`.

## Installation
[➡️ Download the latest release.](https://github.com/chrisgrieser/alfred-docs-searches/releases/latest)

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
