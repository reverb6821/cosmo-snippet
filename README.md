

# Initialize project

* Launch ```pnpm setup project```
* Launch ```pnpm prepare```
* In the terminal, set the commitlint hook with ```npx husky add .husky/commit-msg 'npx commitlint --edit $1'```
* Set also the commitlint hook for the test (if you want) ```npx husky add .husky/pre-push 'pnpm run app:test'```
* Launch the app with ```pnpm run dev```

## commit convention explaination
in follow the conventionalcommit:[https://www.conventionalcommits.org/en/v1.0.0/].
This is an example of valid commit msg:
```feat: allow provided config object to extend other configs```.

This is the accepted msg:
* **chore**: Indicates changes related to maintenance tasks or routine activities. Examples: Updating compilation scripts, fixing typos, optimizing Grunt tasks, etc12.
* **docs**: Refers to changes in documentation. Examples: Updating documentation, correcting errors in comments, etc12.
* **feat**: Indicates the addition of a new feature or component. Examples: Implementation of a new API, addition of a user feature, etc12.
* **fix**: Represents a bug fix. Examples: Fixing a runtime error, correcting a display problem, etc12.
* **perf**: Indicates changes that improve code performance. Examples: Optimizing algorithms, reducing loading times, etc12.
* **refactor**: Refers to changes in code that do not fix a bug or add new functionality. Examples: Restructuring a class, improving code readability, etc12.
* **revert**: Indicates changes that undo a previous commit. Examples: Restoring a previous version of code, undoing an incorrect change, etc12.
* **style**: Represents changes that affect only formatting, whitespace, or semicolons. Examples: Adjusting indentation, correcting formatting errors, etc12.

## .huskyrc config
need css, add this on .lintstagedrc
```    
 "*/**/*.{json,css,md}": [
    //command for style lint
]
```