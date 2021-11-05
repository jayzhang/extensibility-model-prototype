pt-cli
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pt-cli.svg)](https://npmjs.org/package/pt-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pt-cli.svg)](https://npmjs.org/package/pt-cli)
[![License](https://img.shields.io/npm/l/pt-cli.svg)](https://github.com/LongOddCode/pt-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pt-cli
$ pt-cli COMMAND
running command...
$ pt-cli (-v|--version|version)
pt-cli/0.0.0 linux-x64 node-v17.0.1
$ pt-cli --help [COMMAND]
USAGE
  $ pt-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pt-cli config KEY VALUE`](#pt-cli-config-key-value)
* [`pt-cli help [COMMAND]`](#pt-cli-help-command)
* [`pt-cli plugin`](#pt-cli-plugin)

## `pt-cli config KEY VALUE`

Configurations for pt-cli

```
USAGE
  $ pt-cli config KEY VALUE

ARGUMENTS
  KEY    config key
  VALUE  config value

OPTIONS
  -g, --global

EXAMPLE
  $ pt-cli config --global pluginPath yourpath
```

_See code: [src/commands/config.ts](https://github.com/LongOddCode/pt-cli/blob/v0.0.0/src/commands/config.ts)_

## `pt-cli help [COMMAND]`

display help for pt-cli

```
USAGE
  $ pt-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `pt-cli plugin`

Plugin operations

```
USAGE
  $ pt-cli plugin

OPTIONS
  -l, --list

EXAMPLE
  $ pt-cli plugin --list
```

_See code: [src/commands/plugin.ts](https://github.com/LongOddCode/pt-cli/blob/v0.0.0/src/commands/plugin.ts)_
<!-- commandsstop -->
