"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
config_1.ConfigModule.forRoot({
    envFilePath: ['.env.local'],
});
const configService = new config_1.ConfigService();
const dbConfig = {
    type: 'mysql',
    host: configService.getOrThrow('DB_HOST'),
    username: configService.getOrThrow('DB_USER'),
    password: configService.getOrThrow('DB_PASS'),
    database: configService.getOrThrow('DB_NAME'),
    port: configService.getOrThrow('DB_PORT'),
    entities: ['src/*/entities/*.entity.ts'],
    migrations: ['migrations/*.ts'],
};
const dataSource = new typeorm_1.DataSource(dbConfig);
exports.default = dataSource;
//# sourceMappingURL=typeorm.config.js.map