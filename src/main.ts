import "reflect-metadata"
import express from "express";
import ApiRouter from './routers/indexRouter';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use('/api', ApiRouter);

app.listen(4000, () => {
    console.log(`Im listion 3000`);
});

