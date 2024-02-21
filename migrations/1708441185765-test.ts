import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1708441185765 implements MigrationInterface {
    name = 'Test1708441185765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Categories\` ADD \`attributes_order\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Categories\` DROP COLUMN \`attributes_order\``);
    }

}
