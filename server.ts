import express from "express";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

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

//? use all routes
app.use('/', router);

//? server activation
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});