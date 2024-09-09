# eslint-config-team23-standard

A set of eslint rules used by TEAM23 for standard js projects

## ⚠️ Important Notice: Migration to Monorepo ⚠️

**🚨 This package has been moved to a monorepo! 🚨**

As of 09.09.2024, the project has been migrated to a monorepo structure. You can now find the project at the following location:

**🔗 Monorepo Path:** https://github.com/team23/style-guide/tree/main/libs/angular

This move allows us to better manage shared code and collaborate efficiently. Please make sure to update your references to the new monorepo structure.

If you encounter any issues or have questions, please open an issue in the new monorepo repository.

## Installation in your project
Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/eslint-config-team23-standard
```

### Usage in your project

If you've enabled `eslint` locally within your project, just set your `.eslintrc.[json|js]` config to extend the rules from this repo:

#### Extend Globally
```json
{
    "extends": "@team23/eslint-config-team23-standard"
}
```

#### Extend overrides
```json
{
    "overrides": [
        {
            "files": [
                "*.ts",
                "*.tsx",
                "*.js",
                "*.jsx"
            ],
            "extends": [
                "@team23/eslint-config-team23-standard"
            ],
            rules: {}
        }
    ]
}
```

### Extending the .eslintrc.json

Simply add a `"rules"` key to your config, then add your overrides and additions there.

```json
{
    "extends": "@team23/eslint-config-team23-standard",
    "rules": {
        "no-magic-numbers": "off"
    }
}
```

## Development

#### Rules that should be included here
 - eslint rules

#### Rules that should NOT be included here
 - @typescript-eslint rules
 - rules from other frameworks (angular, react, vue), libraries (nx), etc.

### Proposing rule changes

For proposing changes to the ruleset please open either

-   a merge request
-   reviewed and approved by at least one mid-senior level developer
-   additional permission is required if you would like to make a new version after the rule change

### Creating a new version after new rule changes

1) update [CHANGELOG.md](CHANGELOG.md)
2) Run `npm version [<newversion> | major | minor | patch] -m "feat(v${ VERSION }): release new version"`
3) Push commits and tags
4) Run `npm publish --access public` to publish the new version to npm

### Usage inside of this project 

If you want a brief test of this repo, do the following:

- `npm ci`
- Run `npm run lint`

## [License](LICENSE)
TEAM23 GmbH
