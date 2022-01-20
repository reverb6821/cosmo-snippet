<img  src="./andromeda.png"/>


# What is Andromeda?
**Andromeda is my personal MVC boilerplate that I use in my regular workflow for build modern Web App/PWA or Website on a top of Express.JS as server and React.js as front end**

# What is MVC?
The *Model-View-Controller* (MVC) is an architectural pattern that separates an application into three main logical components Model, View, and Controller.
* **View** is that part of the application that represents the presentation of data;
* **Controller** is that part of the application that handles the user interaction;
* **Model** The model component stores data and its related logic. It represents data that is being transferred between controller components or any other related business logic;

## Built With
* [TypeScript]() - JavaScript... but with superpowers!
### Back End:
* [express.js](https://expressjs.com/it/) - Used to create handle routing and process requests from the client.
* [cors](https://github.com/expressjs/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [http-status](https://github.com/adaltas/node-http-status) - Utility to interact with HTTP status code in Node.js.
* [helmet](https://github.com/helmetjs/helmet) - Help secure Express apps with various HTTP headers.
* [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js.
* [winston](https://github.com/winstonjs/winston) - A logger for just about everything..

### Front End
* [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [component-styles](https://styled-components.com/) - Use the best bits of ES6 and CSS to style your apps without stress 💅🏾.
* [framer-motion](https://github.com/framer/motion#readme) - Open source, production-ready animation and gesture library for React.
  
### Tool
* [Husky:](https://github.com/typicode/husky) - Modern native Git hooks made easy 🐶 woof!.
* [ESLint:](https://eslint.org/) - to check error & enforce lint.
* [Prettier:](https://prettier.io/) - A code formatter.
* [AirBnB:](https://airbnb.io/javascript/) - A JavaScript style guide.

### Project Structure
```
.
├── api                             # API root file
│   ├── lib                         # Utility setup
│   ├── routes                      # Where routes was setted
|   ├── services                    # All services
|   ├── .env                        # Enviroment variables
|   ├── .gitignore
|   ├── package.json
|   ├── tsconfig.json
│   └── server.ts                   # Entry point for server
├── client                          # React root directory
│   ├── public                      # Public root file
│   ├── src                         
|   │   ├── Assets                  # Assets file
|   │   ├── Pages                   # Pages directory
|   |   ├── lib                     # Entry file for React App
|   │   └── App.tsx 
|   ├── env                         # Components for home page
│   └── package.json 
└── package.json                    # Entry project directory
```

# Changelog:
*What's new?
- Rewrited with TypeScript
- Replaced frontend with more powerfull React.js
- Replaced web server with a skeleton of API REST service
- Added Prettier & AirBnB to properly work with ESlint and TypeScript on React.js
- Handled Error on APIs
- Added Log System to trace error and server status

*What's next?
- [ ] Add Eslint+Prettier+Husky to lint API
- [ ] Production mode for API service
- [ ] Better yarn scripts for API

# You wanna try it or use it on your workflow?
- Clone this repo ```git clone https://github.com/reverb6821/andromeda.git``` 
- folder and run ```$ yarn install```.
- then move on client folder to and launch ```$ yarn install```

## Authors                                                  
**Giuseppe Gigliotti** - [reverb6821](https://reverb6821.github.io/)
