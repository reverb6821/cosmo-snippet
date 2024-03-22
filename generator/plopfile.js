export default function (plop) {
  plop.setGenerator('\x1b[34mcreate-page', {
    description: '\x1b[32mCreate a new React Page',
    prompts: [
      {
        type: 'input',
        name: 'page',
        message: '\x1b[36mPage name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase page}}/{{pascalCase page}}.tsx',
        templateFile: './templates/createPage/page.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase page}}/__tests__/{{pascalCase page}}.test.tsx',
        templateFile: './templates/createPage/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase page}}/index.ts',
        templateFile: './templates/createPage/index.ts.hbs',
      },
    ],
  }),
  plop.setGenerator('\x1b[34mcreate-route', {
    description: '\x1b[32mCreate a new React route',
    prompts: [
      {
        type: 'input',
        name: 'route',
        message: '\x1b[36mRoute name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/routes/{{pascalCase route}}/{{pascalCase route}}.tsx',
        templateFile: './templates/createRoutes/routes.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/routes/{{pascalCase route}}/index.ts',
        templateFile: './templates/createRoutes/index.ts.hbs',
      },
      {
        type: 'modify',
        path: '../src/routes/Router.tsx',
        pattern: /(\/\/! route:import)/g,
        template: 'const {{pascalCase route}} = React.lazy(()=> import(\'@/routes/{{pascalCase route}}\'))\n$1',
      },
      {
        type: 'modify',
        path: '../src/routes/Router.tsx',
        pattern: /(\/\/! route:component)/g,
        template: '<Route path="/{{dashCase route}}" element={<React.Suspense fallback={<div>Loading...</div>}><{{pascalCase route}}/></React.Suspense>} />\n$1',
      },
      {
        type: 'add',
        path: '../src/routes/{{pascalCase route}}/__tests__/{{pascalCase route}}.test.tsx',
        templateFile: './templates/createRoutes/test.tsx.hbs',
      },
    ],
  }),
  plop.setGenerator('\x1b[34mcreate-component', {
    description: '\x1b[32mCreate a new React component',
    prompts: [
      {
        type: 'input',
        name: 'component',
        message: '\x1b[36mComponent name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase component}}/{{pascalCase component}}.tsx',
        templateFile: './templates/createComponent/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase component}}/{{pascalCase component}}.properties.tsx',
        templateFile: './templates/createComponent/properties.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase component}}/index.ts',
        templateFile: './templates/createComponent/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase component}}/__tests__/{{pascalCase component}}.test.tsx',
        templateFile: './templates/createComponent/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/stories/{{pascalCase component}}/{{pascalCase component}}.stories.tsx',
        templateFile: './templates/createComponent/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/stories/{{pascalCase component}}/{{pascalCase component}}.mdx',
        templateFile: './templates/createComponent/stories.mdx.hbs',
      },
    ],
  });
  plop.setGenerator('\x1b[34mgenerate-hook', {
    description: '\x1b[32mCreate a new Custom Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '\x1b[36mHook Name:',
        validate: (value) => {
          if (value.trim().toLowerCase().startsWith('use')) {
            return true;
          }
          return '\x1b[31mERROR:\x1b[0m hook should start with use (example useFetchData).';
        }
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/hooks/{{camelCase name}}.ts',
        templateFile: './templates/createCustomHook/hook.tsx.hbs',
      },
      {
        type: 'modify',
        path: '../src/hooks/index.ts',
        pattern: /(\/\/! hook:declaration)/g,
        template: '{{camelCase name}},\n$1',
      },
      {
        type: 'modify',
        path: '../src/hooks/index.ts',
        pattern: /(\/\/! hook:import)/g,
        template: 'import {{camelCase name}} from \'./{{camelCase name}}\'\n$1',
      },
    ],
  })
}