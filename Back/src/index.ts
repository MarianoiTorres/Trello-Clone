import express from 'express';
import { router} from './routes/index';
import cors from 'cors';
import morgan from 'morgan';

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'));

app.use(router)

app.listen(3001, () => {
    console.log("Server listening on port 3001");
})