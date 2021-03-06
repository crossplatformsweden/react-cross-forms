[![Crossplatform](https://crossplatform.se/wp-content/uploads/2018/05/Crossplatform-Sweden-AB-01_web.jpg)](https://www.crossplatform.se/)

<!-- language-all: javascript -->

# Crossplatform React-Native

Developer documentation

**Package renamed**  
New package name: `react-native-cross-components`

These are some of the common use components [Crossplatform](https://www.crossplatform.se/) use in our projects.

---

[![npm](https://img.shields.io/npm/v/react-native-cross-components.svg)](https://www.npmjs.com/package/react-native-cross-components)
[![npm](https://img.shields.io/npm/dt/react-native-cross-components.svg)](https://www.npmjs.com/package/react-native-cross-components)

[![Build status](https://img.shields.io/azure-devops/build/crossplatformsweden/parkeraapp/15.svg)](https://crossplatformsweden.visualstudio.com/ParkeraApp/_build/latest?definitionId=15)
[![codecov](https://codecov.io/gh/crossplatformsweden/react-native-components/branch/master/graph/badge.svg)](https://codecov.io/gh/crossplatformsweden/react-native-components)
[![dependencies](https://david-dm.org/crossplatformsweden/react-native-components/status.svg)](https://david-dm.org/crossplatformsweden/react-native-components)
[![peer dependencies](https://img.shields.io/david/peer/crossplatformsweden/react-native-components.svg)](https://github.com/crossplatformsweden/react-native-components)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![GitHub](https://img.shields.io/github/license/crossplatformsweden/react-native-components.svg)

[![React Native](https://img.shields.io/badge/React%20Native-v0.57-blue.svg)](https://facebook.github.io/react-native/)
[![React Native Paper](https://img.shields.io/badge/React%20Native%20Paper-v2.2.4-blue.svg)](https://github.com/callstack/react-native-paper)
[![React Native Vector Icons](https://img.shields.io/badge/React%20Native%20Vector%20Icons-v4.5.0-blue.svg)](https://github.com/oblador/react-native-vector-icons)
[![React Native Indicators](https://img.shields.io/badge/React%20Native%20Indicators-v0.13.0-blue.svg)](https://github.com/n4kz/react-native-indicators)
[![React Native Modal](https://img.shields.io/badge/React%20Native%20Modal-v7.0.0-blue.svg)](https://github.com/react-native-community/react-native-modal)

[![GitHub forks](https://img.shields.io/github/forks/crossplatformsweden/react-native-components.svg?style=social&label=Fork)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub stars](https://img.shields.io/github/stars/crossplatformsweden/react-native-components.svg?style=social&label=Star)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub watchers](https://img.shields.io/github/watchers/crossplatformsweden/react-native-components.svg?style=social&label=Watch)](https://github.com/crossplatformsweden/react-native-components)
[![Twitter Follow](https://img.shields.io/twitter/follow/crossplatformse.svg?style=social)](https://twitter.com/crossplatformse)

## Table of Contents

- [Crossplatform React-Native Components](#crossplatform-react-native-components)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
    - [Important Icons!](#important-icons-)
  - [Documentation](#documentation)
  - [Components](#components)
    - [CrossButton](#crossbutton)
    - [CrossBusyIndicator](#crossbusyindicator)
    - [CrossSpinner](#crossspinner)
    - [CrossLabel](#crosslabel)
    - [CrossEditor](#crosseditor)
  - [Can not run ShellScript](#can-not-run-shellscript)
- [Tools](#tools)
  - [Java](#java)
  - [Git](#git)
    - [Git Credential Manager](#git-credential-manager)
  - [Node](#node)
  - [Yarn](#yarn)
  - [Visual Studio Code](#visual-studio-code)
- [Scripts](#scripts)
  - [yarn dev](#yarn-dev)
  - [yarn read-sh](#yarn-read-sh)
  - [yarn install-globals](#yarn-install-globals)
  - [yarn lint](#yarn-lint)
  - [yarn build](#yarn-build)
  - [yarn build-watch](#yarn-build-watch)
  - [yarn start](#yarn-start)
  - [yarn test-watch](#yarn-test-watch)
  - [yarn test](#yarn-test)
  - [yarn docs](#yarn-docs)
  - [npm-version](#npm-version)
- [Debugging](#debugging)
- [Release](#release)
  - [Publish new version](#publish-new-version)
    - [Publish GitHub documentation](#publish-github-documentation)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Install

Install with [react-native-paper](https://github.com/callstack/react-native-paper) if you don't already have it.

**Package renamed**  
Previous package name: `@crossplatform/react-native-components`  
New package name: `react-native-cross-components`

```bash
	npm i react-native-paper
	npm i react-native-cross-component
```

Or if you're hanging with the cool kids

```bash
	yarn add react-native-paper
	yarn add react-native-cross-component
```

## Can not run ShellScript

Adjust the rights on SH-files for your user (in root). Remarks: we use **[bash terminal in VS Code](#bash-on-windows)**

```bash
    yarn read-sh
```

Or manually:

```bash
	sudo find . -name "\*.sh" | xargs chmod u+x
```

# Tools

## Java

We use **version 8** of the Java JDK. On OSX, remove any older versions according to this process

https://stackoverflow.com/questions/46770453/java-error-when-using-git-credential-manager-in-mac-on-osx

```bash
    brew cask remove java
    sudo rm -rf "/Library/Internet Plug-Ins/JavaAppletPlugin.plugin"
    sudo rm -rf "/Library/PreferencePanes/JavaControlPanel.prefPane"
    sudo rm -rf "~/Library/Application Support/Oracle"
    sudo rm -rf "~/Library/Java"
```

**[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)**

## Git

We're using latest stable. Install the version for your OS from:

**[https://git-scm.com/downloads](https://git-scm.com/downloads 'Download Git')**

### Git Credential Manager

You need the manager to log in to Microsoft from MacOS using Git.  
If you've updated Java, re-install GCM after.

```bash
	git-credential-manager install
```

## Node

These versions provides stable compatibility with React Native and other frameworks:

- **Node v8.9.4** (`node --version`)
- **npm 5.6.0** (`npm --version`)

**[Download Node with NPM](https://nodejs.org/download/release/v8.9.4/)**

## Yarn

We install and run our scripts with yarn, as an alternative to npm:

**[Download Yarn](https://yarnpkg.com/lang/en/docs/install/)**

## Visual Studio Code

We use Visual Studio Code with relevant plugins.

- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)**
- **[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)**
- **[TypeScript toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter)**
- **[Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)**

# Scripts

## yarn dev

**Always run after pull / clone!**

- Installs global tools (npm packages, CLI tools)
- Cleans code using `yarn lint`

## yarn read-sh

See [Can not run ShellScript](#can-not-run-shellscript)

## yarn install-globals

Install global CLI tools required by the project

## yarn lint

Executes `lint.sh` that runs **prettier** and **tslint** code formatting, fixing inconsistencies.

## yarn build

Start **TypeScript** compiler. Run at least once to generate **/lib** folder where JavaScript resides. You can also...

## yarn build-watch

Start **TypeScript** compiler and watch for changes.

## yarn start

Start the React-Native packager. You can also start it with options:

```bash
	npm start -- --reset-cache
	# or
	yarn start -- --reset-cache
```

## yarn test-watch

Run tests in watch mode, for development, updating snapshots as needed.

Runs the [jest](https://github.com/facebook/jest) test runner on your tests in watch mode with interactive console. Remember to run `u` option when prompted to update snapshots. This is alias to `npm run test`

## yarn test

Run tests as CI, not updating any snapshots. Run this before commit to ensure tests will work on build server.

You can run CI style tests in respective folder using

    yarn test

But in development you would want to test and **update Jest snapshots** (**`--u`**):

    yarn test-watch

## yarn docs

Generate documentation. [Read more](#publish-github-documentation)

## npm-version

Up the NPM package version before running `npm publish`. Automatically run as `prepublishOnly` command.

# Debugging

Use VS Code's debugging capabilities to maintain a effective development cycle.

**`Launch.json`** configuration is not checked in, but here is the debug `launch.json` for React-Native

```json
        {
            "name": "Attach to packager",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "attach",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
        {
            "name": "Debug in Expo",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "launch",
            "platform": "exponent",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
        {
            "name": "Debug Android",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "launch",
            "platform": "android",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
        {
            "name": "Debug iOS",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "launch",
            "platform": "ios",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },
```

And finally Jest Test debugging:

```json
({
  "name": "Debug Jest Tests",
  "type": "node",
  "request": "launch",
  "runtimeArgs": [
    "--inspect-brk",
    "${workspaceRoot}/node_modules/.bin/jest",
    "--runInBand",
    "--collectCoverage=false"
  ],
  "args": ["test", "--runInBand", "--no-cache", "--env=jsdom"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen",
  "port": 9229
},
{
  "type": "node",
  "request": "launch",
  "name": "Jest Current File",
  "program": "${workspaceRoot}/node_modules/jest/bin/jest",
  "runtimeArgs": [
    "--inspect-brk",
    "${workspaceRoot}/node_modules/.bin/jest",
    "--runInBand",
    "--collectCoverage=false"
  ],
  "args": ["${file}", "--no-cache", "--env=jsdom"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen",
  "port": 9229
})
```

# Release

The project is released through NPM

[![npm](https://img.shields.io/npm/v/react-native-cross-components.svg)](https://www.npmjs.com/package/react-native-cross-components)

The source code is available on the **[Crossplatform GitHub](https://github.com/crossplatformsweden/react-native-components)**.

## Publish new version

1. Update the version. This will also run build and linting.

```bash
	yarn npm-version
```

2. Publish the new version on NPM (if not logged in run `npm adduser` first)

```bash
	npm publish --access public
```

### Publish GitHub documentation

Generate documentation using the `docs`command

```bash
	yarn docs
```

This will

1. Generate docs using the `typedoc` library (`yarn generate-docs`)
1. Publish to GitHub pages using the `gh-pages` library (`yarn gh-pages`)
