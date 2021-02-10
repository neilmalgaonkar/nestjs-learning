import DatabaseConfig from './database.config';

export default () => ({
    environment: 'development',
    port: 3000,
    database: {
        ...DatabaseConfig()
    }
});
