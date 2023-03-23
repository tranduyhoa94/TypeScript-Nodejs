import "reflect-metadata"
import express from "express";
import ApiRouter from './routers/indexRouter';
import bodyParser from 'body-parser';
import { AppDataSource } from "./utils/dataSource";

const app = express();

app.use(bodyParser.json());
app.use('/api', ApiRouter);
AppDataSource.initialize()
.then(() => console.log('connection access DB'))
.catch((err) => console.log('Connection failed'))
app.listen(4000, () => {
    console.log(`Im listion 4000`);
});

