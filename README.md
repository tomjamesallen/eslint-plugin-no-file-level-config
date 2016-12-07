# eslint-plugin-no-file-level-config

Warn of file level eslint rules.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-file-level-config`:

```
$ npm install eslint-plugin-no-file-level-config --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-file-level-config` globally.

## Usage

Add `no-file-level-config` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-file-level-config"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-file-level-config/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





