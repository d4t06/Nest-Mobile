declare namespace NodeJS {
  export interface ProcessEnv {
    DB_HOST: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASS: string;
    DB_PORT: string;
    JWT_SECRET: string;
    CLOUD_NAME: string;
    CLOUD_API_KEY: string;
    CLOUD_API_SECRET: string;
  }
}
