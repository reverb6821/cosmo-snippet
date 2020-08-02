# MVC skeleton
**A ready-to-use skeleton for a nodejs/express app with a sql db**

## Authors                                                  
**Giuseppe Gigliotti** - [ReverbOD](https://gigliottigiuseppe.it)
 
## Built With
### Back End:
* [nodejs:](https://nodejs.org/en/) - Build entirely with nodejs for the back-end part
* [express.js](https://expressjs.com/it/) - used to create handle routing and process requests from the client.
* [body-parser](https://www.npmjs.com/package/body-parser) - Used to parse incoming request from the client.
* [MySQL](https://www.npmjs.com/package/mysql) - Node JS driver for MySQL.
* [nodemon](https://www.npmjs.com/package/nodemon) - Installed globally. It is used to watch for changes to files and automatically restart the server.
* [ejs](https://ejs.co/) - templating engine to render html pages for the app.

### Front End
* [Sass](https://sass-lang.com/) - Css Pre-processor.
* [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript.

### Tool I've used
* [webpack:](https://webpack.js.org/) - webpack is a static module bundler for modern JavaScript applications.
* [ESlint:](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems.

# What is MVC?
The *Model-View-Controller* (MVC) is an architectural pattern that separates an application into three main logical components Model, View, and Controller.
* **View** is that part of the application that represents the presentation of data;
* **Controller** is that part of the application that handles the user interaction;
* **Model** The model component stores data and its related logic. It represents data that is being transferred between controller components or any other related business logic;

# How to use
Clone this repo `git clone https://github.com/ReverbOD/mvc-nodejs-sql-skeleton.git`, then install all the dependencies writing in the terminal `$ npm i`.

# How to use webpack
In `src/media` are stored all the CSS/JS/Sass file that you need to compile (if you need more JS/Sass/CSS remember to add it on `src/js/index.js` typing `import '../yourFolder/fileYouNeed;` and then run webpack with `npm run build` to compile all your file.
Here I've used:
-babel-loader, a JS transpiller needed to transform our modern JavaScript code to browser-compatible JavaScript code before bundling it;
-sass-loader, to loads a Sass/SCSS file and compiles it to CSS;
-postcss-loader, a tool for transforming styles with JS plugins.I've lefted the config file empty, so you can add the plugin you need;
-mini-css-extract-plugin, a plugin i need to extract all the transformed CSS from Sass into a separate "bundle";
-file-loader, for manage the imgs and font in the CSS/Sass, resolves import/require() on a file into a url and emits the file into the output directory;

## Production Mode on Webpack
Type `npm run build-production` for production mode
