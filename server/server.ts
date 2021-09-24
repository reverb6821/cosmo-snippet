import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello from Andromeda');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
