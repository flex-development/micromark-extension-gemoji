# micromark-extension-gemoji

[![github release](https://img.shields.io/github/v/release/flex-development/micromark-extension-gemoji.svg?include_prereleases&sort=semver)](https://github.com/flex-development/micromark-extension-gemoji/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/micromark-extension-gemoji.svg)](https://npmjs.com/package/@flex-development/micromark-extension-gemoji)
[![codecov](https://codecov.io/gh/flex-development/micromark-extension-gemoji/graph/badge.svg?token=PSNBFdLspQ)](https://codecov.io/gh/flex-development/micromark-extension-gemoji)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/micromark-extension-gemoji.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[micromark][micromark] extensions to support [gemoji][gemoji] (`:+1:`)

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Syntax](#syntax)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package contains two extensions that add support for gemoji (GitHub Emoji) syntax in markdown to
[`micromark`][micromark].

Gemoji are the shortcodes that GitHub uses to represent emoji. For example, `:grinning:` can be used for 😀.

## When should I use this?

**TODO**: when should i use this?

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][yarn]:

```sh
yarn add @flex-development/micromark-extension-gemoji
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { gemoji, gemojiHtml } from 'https://esm.sh/@flex-development/micromark-extension-gemoji'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { gemoji, gemojiHtml } from 'https://esm.sh/@flex-development/micromark-extension-gemoji'
</script>
```

## Use

**TODO**: use

## API

**TODO**: api

## Syntax

**TODO**: syntax

## Types

This package is fully typed with [TypeScript][typescript].

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[esmsh]: https://esm.sh/
[gemoji]: https://github.com/wooorm/gemoji
[micromark]: https://github.com/micromark/micromark
[typescript]: https://www.typescriptlang.org
[yarn]: https://yarnpkg.com
