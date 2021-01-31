<img  src="./cover.png"/>


# What is Andromeda?
**Andromeda is my personal MVC boilerplate that I use in my regular workflow to create website & web application builded with Express.JS, Webpack as compiler & Dev Server and Handlebars.js as template engine to render views.**


# What is MVC?
The *Model-View-Controller* (MVC) is an architectural pattern that separates an application into three main logical components Model, View, and Controller.
* **View** is that part of the application that represents the presentation of data;
* **Controller** is that part of the application that handles the user interaction;
* **Model** The model component stores data and its related logic. It represents data that is being transferred between controller components or any other related business logic;



## Built With
### Back End:
* [express.js](https://expressjs.com/it/) - Used to create handle routing and process requests from the client.
* [MySQL](https://www.npmjs.com/package/mysql) - Node JS driver for MySQL.
### Front End
* [Scss](https://sass-lang.com/) - Awesome css pre-processor.
* [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript.
* [handlebars](https://handlebarsjs.com/) - templating engine to render html pages for js.
### Tool
* [Webpack:](https://webpack.js.org/) - As dev server & compiler for scss & js.
* [ESlint:](https://eslint.org/) - to check error & enforce lint.
* [Prettier:](https://prettier.io/) - A code formatter.
* [AirBnB:](https://airbnb.io/javascript/) - A JavaScript style guide.



### Webpack
In `src/views/assests` are stored all the scss & js files that you need to compile.
*Commands Guide:
* `build` - this will launch automatic build with webpack
* `start` - launch the dedicated dev server on port 3000
* `style` - prettier will format all your code (On .prettierrc.json you will find some style I used, to find more go on [Prettier.io](https://prettier.io/docs/en/options.html))

As Webpack plugin you will find:
* babel-loader, a JS transpiller needed to transform our modern JavaScript code to browser-compatible JavaScript code before bundling it:
* sass-loader, to loads a Sass/SCSS file and compiles it to CSS;
* postcss-loader, a tool for transforming styles with JS plugins.I've lefted the config file empty, so you can add the plugin you need;
* mini-css-extract-plugin, a plugin i need to extract all the transformed CSS from Sass into a separate "bundle";
* file-loader, for manage the imgs and font in the CSS/Sass, resolves import/require() on a file into a url and emits the file into the output directory;
* handlebars-loader, A handlebars template loader for webpack;



# Changelog:
*What's new?
- Replaced .ejs with handlebars.js
- Improved Webpack with plugin
- Improved code (Less code)
- Added Webpack as Dev Server
- Added Prettier & AirBnB to properly work with ESlint
- Better File Organization
- Add MVC file pattern

*What's next?
- [ ] Fix Prettier
- [ ] better documentation
- [ ] production mode on webpack


# You wanna try it or use it on your workflow?
- Clone this repo `git clone https://github.com/ReverbOD/andromeda.git` 
- open terminal `$ npm i`.


# Webpack
In `src/views/assests` are stored all the scss & js files that you need to compile.
*Commands Guide:
* `build` - this will launch automatic build with webpack
* `start` - launch the dedicated dev server on port 3000
* `style` - prettier will format all your code (On .prettierrc.json you will find some style I used, to find more go on [Prettier.io](https://prettier.io/docs/en/options.html)).
As Webpack plugin you will find:
* babel-loader, a JS transpiller needed to transform our modern JavaScript code to browser-compatible JavaScript code before bundling it:
* sass-loader, to loads a Sass/SCSS file and compiles it to CSS;
* postcss-loader, a tool for transforming styles with JS plugins.I've lefted the config file empty, so you can add the plugin you need;
* mini-css-extract-plugin, a plugin i need to extract all the transformed CSS from Sass into a separate "bundle";
* file-loader, for manage the imgs and font in the CSS/Sass, resolves import/require() on a file into a url and emits the file into the output directory;
* handlebars-loader, A handlebars template loader for webpack;

## Authors                                                  
**Giuseppe Gigliotti** - [ReverbOD](https://reverbod.github.io/)
