import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "dbtest",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});