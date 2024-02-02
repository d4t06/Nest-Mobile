import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1706808945355 implements MigrationInterface {
    name = 'MyMigration1706808945355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_name\` varchar(255) NOT NULL, \`represent\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`IDX_7ca96fabd25a4ab7c96b0a2a9b\` (\`represent\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_name\` varchar(255) NOT NULL, \`product_ascii\` varchar(255) NOT NULL, \`image_url\` varchar(255) NULL, \`category_id\` int NOT NULL, \`categoryIdId\` int NULL, UNIQUE INDEX \`IDX_b78cdbe0a23e42e0b88172186d\` (\`product_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category_attribute\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_id\` int NOT NULL, \`attribute_ascii\` varchar(255) NOT NULL, \`attribute_name\` varchar(255) NOT NULL, \`categoryIdId\` int NULL, PRIMARY KEY (\`id\`, \`category_id\`, \`attribute_ascii\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_attribute\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_id\` int NOT NULL, \`category_attribute_id\` int NOT NULL, \`value\` text NOT NULL, \`productIdId\` int NULL, \`categoryAttributeIdId\` int NULL, \`categoryAttributeIdCategoryId\` int NULL, \`categoryAttributeIdAttributeAscii\` varchar(255) NULL, PRIMARY KEY (\`id\`, \`product_id\`, \`category_attribute_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_b62481426cb6f955ee9a74ffcfe\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category_attribute\` ADD CONSTRAINT \`FK_0b2dbd83142f15aec2fac73055d\` FOREIGN KEY (\`categoryIdId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_attribute\` ADD CONSTRAINT \`FK_8ce055f444006097840a4dabdd6\` FOREIGN KEY (\`productIdId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_attribute\` ADD CONSTRAINT \`FK_b73032e382d347a082af5720a6c\` FOREIGN KEY (\`categoryAttributeIdId\`, \`categoryAttributeIdCategoryId\`, \`categoryAttributeIdAttributeAscii\`) REFERENCES \`category_attribute\`(\`id\`,\`category_id\`,\`attribute_ascii\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product_attribute\` DROP FOREIGN KEY \`FK_b73032e382d347a082af5720a6c\``);
        await queryRunner.query(`ALTER TABLE \`product_attribute\` DROP FOREIGN KEY \`FK_8ce055f444006097840a4dabdd6\``);
        await queryRunner.query(`ALTER TABLE \`category_attribute\` DROP FOREIGN KEY \`FK_0b2dbd83142f15aec2fac73055d\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_b62481426cb6f955ee9a74ffcfe\``);
        await queryRunner.query(`DROP TABLE \`product_attribute\``);
        await queryRunner.query(`DROP TABLE \`category_attribute\``);
        await queryRunner.query(`DROP INDEX \`IDX_b78cdbe0a23e42e0b88172186d\` ON \`product\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP INDEX \`IDX_7ca96fabd25a4ab7c96b0a2a9b\` ON \`category\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
