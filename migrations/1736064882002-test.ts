import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1736064882002 implements MigrationInterface {
    name = 'Migrations1736064882002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e91deb5308ec00d47f01187326\` ON \`Brands\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`check_unique_brand\` ON \`Brands\` (\`category_id\`, \`brand_name_ascii\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`check_unique_brand\` ON \`Brands\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e91deb5308ec00d47f01187326\` ON \`Brands\` (\`brand_name_ascii\`)`);
    }

}
