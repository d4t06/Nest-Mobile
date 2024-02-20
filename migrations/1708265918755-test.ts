import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1708265918755 implements MigrationInterface {
    name = 'Test1708265918755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image_url\` varchar(255) NOT NULL, \`public_id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`size\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Images\``);
    }

}
