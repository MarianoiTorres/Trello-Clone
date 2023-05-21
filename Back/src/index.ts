import express from 'express';
import router from './routes/tasks';

const app = express()
app.use(express.json())

app.use('/clone', router)

app.listen(3001, async() => {
    console.log("Server listening on port 3001");
})