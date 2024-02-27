import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1708954090342 implements MigrationInterface {
    name = 'Test1708954090342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` ADD \`refresh_token\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`refresh_token\``);
    }

}
