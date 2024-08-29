import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1724678477616 implements MigrationInterface {
    name = 'Test1724678477616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`approved\` \`approved\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`date_diff\` \`date_diff\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`date_diff\` \`date_diff\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`approved\` \`approved\` tinyint NOT NULL`);
    }

}
