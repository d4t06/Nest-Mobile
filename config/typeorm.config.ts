import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: ['.env.local'],
});

const configService = new ConfigService();

const dbConfig: DataSourceOptions = {
  // DB Variables
  type: 'mysql',
  host: configService.getOrThrow('DB_HOST'),
  username: configService.getOrThrow('DB_USER'),
  password: configService.getOrThrow('DB_PASS'),
  database: configService.getOrThrow('DB_NAME'),
  port: configService.getOrThrow('DB_PORT'),

  // TypeORM Entity
  entities: ['src/*/entities/*.entity.ts'],
  // Your Migration path
  migrations: ['migrations/*.ts'],
// 
};

const dataSource = new DataSource(dbConfig);

export default dataSource;
