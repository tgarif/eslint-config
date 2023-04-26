# @tgarif/eslint-config

[![npm](https://img.shields.io/npm/v/@tgarif/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@tgarif/eslint-config)

## Usage

### Install

```bash
npm i -D @tgarif/eslint-config
```

### Default config (non-fix)

Example usage for your `/.eslintrc.json`:

```json
{
  "extends": "@tgarif/eslint-config",
  "rules": {}
}
```

### Fix config

Example usage for your `/.eslintrc.fix.json`:

```json
{
  "extends": "@tgarif/eslint-config/fix",
  "rules": {}
}
```

### Config VS Code auto fix

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Tengku Arif](https://github.com/tgarif)
