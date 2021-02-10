import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import AppConfig from './../config/app.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: false,
            load: [
                AppConfig
            ]
        }),
        TypeOrmModule.forRootAsync({
            imports: [
                ConfigModule
            ],
            useFactory: (configService: ConfigService) => {
                return configService.get<ConnectionOptions>('database');
            },
            inject: [
                ConfigService
            ]
        }),
    ],
    providers: [],
    exports: [],
    controllers: [],
})
export class BootstrapModule {};