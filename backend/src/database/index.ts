import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "src/post";


export const db = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: [Post],
    synchronize: true,
    logging: false
});

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
db.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))