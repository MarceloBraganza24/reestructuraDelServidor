import dotenv from 'dotenv';
import { Command } from 'commander';

//archivo para centralizar todas las variables que pueden ser dinamicas y tambien sensibles

const program = new Command();

program.option('--mode <mode>', 'variable de ambiente');
program.parse();

const enviroment = program.opts().mode;

dotenv.config({
    path: (enviroment === 'DEVELOPMENT') ? './.env.development' : './.env.production' 
});

const configs = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
}

export default configs;