import { ConnectionOptions } from 'typeorm';
import DbConfig from './database.config';
import * as dotenv from 'dotenv';

dotenv.config();

const typeormConfig = DbConfig() as ConnectionOptions;

export default typeormConfig;