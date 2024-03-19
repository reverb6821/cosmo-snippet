# Initialize project

* install pnpm ```npm install -g pnpm```.
* install [bettercomments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension.
* Launch ```pnpm setup project``` to setup husky.
* Launch ```pnpm prepare``` to setup husky and commitlint hooks for git.
* Launch the app with ```pnpm run dev```


## Importer
The absolute importer will let you to import with precision and less code component and code you wrote.
Example
```import { Header } from '@components/Header/Header' ```

The importer available are:
* **@/**: import from the src path
* **@assets**: import from assets folder
* **@pages**: import from pages folder
* **@routes**: import from routes folder
* **@components**: import from components folder
* **@hooks**: import from hooks folder

If you need more importer (example store folder), you need to do this steps:
* open ```vite.config.ts``` and find ```"paths": {}```.
* inside ```"paths"``` add this ```'@store': fileURLToPath(new URL('./src/store', import.meta.url)),```.
* the, open  ```tsconfig.json``` and find ```"paths": {}```.
* inside ```"paths"``` add this ``` "@store/*": ["src/store/*"],```

## Generator
The generator is used to automatically generate standard structure of components and elements that can be modified later to make them suitable for use. To use it, launch the command ```pnpm generate```and select the parameter you are interested in.
Is present:
* **page**: the father element (example Dashboard, Main ecc).
* **route**: the children element, to insert inside the page.
* **component**: a simply component, like form, table etc.
* **hook**: if you need a custom hook, create the structure with this command.

## Example of src folder
```
└── src
   ├── @types
   ├── assets
   |   ├── fonts
   |   ├── img
   |   └── style
   ├── components *where all custom components are placed
   ├── hooks *where all custom hooks are placed
   ├── pages
   |   ├── NotFound
   |   └── Main *this is an example of father element
   ├── routes
   |   ├── Home *this is an example of children element (see further to more details)
   |   └── Router.tsx *entry point for pages and router
   └── main.tsx
```

## Example of router
We define a pages (as example Main ), that will contain all the route (example Home) and the next route that we will create.
to handle an auth/unath route, you need to create 2 different pages (example Auth/Unauth) and place inside them the route you need.

```
  <React.Fragment>
    <Routes>
      <Route element={<React.Suspense fallback={<div>Loading...</div>}><Main/></React.Suspense>}>
        <Route path="/home" element={<React.Suspense fallback={<div>Loading...</div>}><Home/></React.Suspense>} />
        //! route:component
        <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFound/></React.Suspense>} />
      </Route>
    </Routes>
  </React.Fragment>
```

## commit convention explaination
in follow the conventionalcommit:[https://www.conventionalcommits.org/en/v1.0.0/].
This is an example of valid commit msg:
```feat: allow provided config object to extend other configs```
If you need the scope of commit you can addit.
```feat(ui): added header on template page```

This is the accepted msg:
* **chore**: Indicates changes related to maintenance tasks or routine activities. Examples: Updating compilation scripts, fixing typos, optimizing Grunt tasks, etc.
* **docs**: Refers to changes in documentation. Examples: Updating documentation, correcting errors in comments, etc.
* **feat**: Indicates the addition of a new feature or component. Examples: Implementation of a new API, addition of a user feature, etc.
* **fix**: Represents a bug fix. Examples: Fixing a runtime error, correcting a display problem, etc.
* **perf**: Indicates changes that improve code performance. Examples: Optimizing algorithms, reducing loading times, etc.
* **refactor**: Refers to changes in code that do not fix a bug or add new functionality. Examples: Restructuring a class, improving code readability, etc.
* **revert**: Indicates changes that undo a previous commit. Examples: Restoring a previous version of code, undoing an incorrect change, etc.
* **style**: Represents changes that affect only formatting, whitespace, or semicolons. Examples: Adjusting indentation, correcting formatting errors, etc.

## .huskyrc further config
need css, add this on .lintstagedrc
```    
 "*/**/*.{json,css,md}": [
    //command for style lint
]
```
