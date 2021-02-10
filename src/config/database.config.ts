const DatabaseConfig = () => ({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    entities: [
        "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: process.env.DB_SYNCHRONIZE || false,
    migrationsTableName: 'migrations',
    migrations: [
        "dist/src/migrations/*{.ts,.js}"
    ],
    cli: {
        migrationsDir: "src/migrations"
    }
});

export default DatabaseConfig;
