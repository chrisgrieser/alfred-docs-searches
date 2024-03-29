<!-- LTeX: enabled=false -->
# Search ALL the docs
<!-- LTeX: enabled=true -->
![Download Count](https://img.shields.io/github/downloads/chrisgrieser/alfred-docs-searches/total?label=Total%20Downloads&style=plastic)
![Latest Release](https://img.shields.io/github/v/release/chrisgrieser/alfred-docs-searches?label=Latest%20Release&style=plastic)

Search more than two dozen official documentation sites and other macOS
developer references via Alfred.

<img src="./assets/showcase git.png" alt="showcase git" width="50%">

<img src="./assets/showcase pandoc.png" alt="showcase Pandoc" width="50%">

## Table of Contents

<!-- toc -->

- [Usage](#usage)
- [Documentations Searched](#documentations-searched)
- [Extra Utilities](#extra-utilities)
- [Installation](#installation)
- [Contribute](#contribute)
- [About the developer](#about-the-developer)

<!-- tocstop -->

## Usage
Search more than two dozen developer documentation sites via one of the keywords
below.
- <kbd>⏎</kbd>: Open the documentation site.
- <kbd>⌥</kbd><kbd>⏎</kbd>: Copy the URL of the documentation site to the clipboard.

## Documentations Searched
- `css`: MDN
- `html`: MDN
- `js`: MDN
- `jxa`: JavaScript for Automation Cookbook
- `lua`: lua manual
- `eslint`
- `style`: stylelint rules
- `bio`: biome docs ([rome successor](https://biomejs.dev/blog/annoucing-biome))
- `sc`: shellcheck Wiki
- `pandoc`: Pandoc User Manual
- `git`: official docs & the "pro-git" book
- `py`: python official docs
- `ruff`: ruff rules
- `pd`: pandas docs
- `cht`: cheat.sh
- `man`: man pages at [mankier.com](https://www.mankier.com/)
- `hs`: Hammerspoon reference
- `sb`: sketchybar docs
- `ke`: Karabiner Elements docs
- `star`: starship prompt docs
- `ep`: espanso docs
- `wt`: WezTerm docs
- `yq`\*
- `dt`: Lookup term at [devterms.io](https://devterms.io/)

> [!NOTE]
> \* These documentation searches do not cover all sub-sites.
> [Contributions](#contribute) to improve them are welcome.

## Extra Utilities
- `col`: named CSS colors
- `coco`: conventional commit keywords
- `keycode`: macOS keycodes
- `appid`: app-id of installed macOS apps
- `win`: window information for the frontmost app
- `code`: Code search on GitHub and SourceGraph
- `http`: HTTP status codes
- `uri`: URI schemes available on the device
- `as`: AppleScript Dictionaries of installed apps
- `sound`: Preview (pre-listen, technically) macOS System Sounds
- Get the Uniform Type Identifier (UTI) of a selected file via the [Universal Action](https://www.alfredapp.com/help/workflows/triggers/universal-actions/)

## Installation
[➡️ Download the latest release.](https://github.com/chrisgrieser/alfred-docs-searches/releases/latest)

<!-- vale Google.FirstPerson = NO -->
## Contribute
Adding more docs searches is fairly simple, most of the work is done by Alfred.
What this workflow does is to look through some sort of index of documentation
sites, and re-format the list of files into [a JSON file that Alfred
understands](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/).
In most cases, this is less than 40 lines of code per documentation site.

Indexes for documentation sites can be:
- A reference site listing all sub-sites. The HTML page can be parsed for `<a
  href>`. See [the lua manual search](./scripts/lua-manual-search.js) for an
  example.
- The documentation site is generated from a public repository on GitHub. In that
  case, the index of files exposed via the GitHub API can be used to determine
  all documentation sites. See [`eslint` docs
  search](./scripts/eslint-docs-search.js)
  as an example.
- There is a direct API providing documentation sites based on a query. An
  example for that is the [MDN search](./scripts/mdn-search.js).
- Using an existing index, already available online or even locally. This is for
  example the case for the [Hammerspoon docs search](./scripts/hammerspoon-docs.js).

Those scripts do not need to be written in JavaScript, any language that outputs
stringified JSON works. Though, it should be languages for which interpreters
are pre-installed on Mac, as this would otherwise introduce extra dependencies
for this workflow to work. Effectively, this means Python, JXA (Apple-flavored
JavaScript), or Ruby.

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
