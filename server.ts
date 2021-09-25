import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

// ? import routes
import { router } from './src/routes/router'

dotenv.config(); //? dotenv config

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './client/build'))); //? this will make react app visible to server

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

//? use all routes
app.use('/', router);

//? server activation
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});