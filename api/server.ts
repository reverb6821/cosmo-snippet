import path from 'path';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';

// ? import routes
import { router } from './routes/router'

dotenv.config(); //? dotenv config

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../dist/client'))); //? this will make react app visible to server

//? use all routes
app.use('/', router);

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

//? server activation
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});