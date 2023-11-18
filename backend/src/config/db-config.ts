export const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "test"
}