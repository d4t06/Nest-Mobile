import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Test1758873720614 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
