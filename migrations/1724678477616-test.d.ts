import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Test1724678477616 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
