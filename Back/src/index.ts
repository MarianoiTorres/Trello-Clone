import express from 'express';
import { router} from './routes/index';
import cors from 'cors';
import morgan from 'morgan';
import db from './db/mongo'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'));

app.use(router)
db().then(() => console.log('conexion lista'))
app.listen(3001, () => {
    console.log("Server listening on port 3001");
})