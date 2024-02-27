import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1709021116908 implements MigrationInterface {
    name = 'Test1709021116908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL`);
    }

}
