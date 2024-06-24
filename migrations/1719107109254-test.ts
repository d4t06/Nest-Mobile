import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1719107109254 implements MigrationInterface {
    name = 'Test1719107109254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`refresh_token\` varchar(255) NOT NULL DEFAULT '', \`role\` varchar(255) NOT NULL DEFAULT 'USER', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Brands\` (\`id\` int NOT NULL AUTO_INCREMENT, \`brand_name\` varchar(255) NOT NULL, \`brand_name_ascii\` varchar(255) NOT NULL, \`image_url\` varchar(255) NOT NULL, \`category_id\` int NOT NULL, UNIQUE INDEX \`IDX_e91deb5308ec00d47f01187326\` (\`brand_name_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Category_Attributes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_id\` int NOT NULL, \`attribute_name_ascii\` varchar(255) NOT NULL, \`attribute_name\` varchar(255) NOT NULL, \`represent\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`check_unique\` (\`category_id\`, \`attribute_name_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_name\` varchar(255) NOT NULL, \`category_name_ascii\` varchar(255) NOT NULL, \`attribute_order\` varchar(255) NULL, UNIQUE INDEX \`IDX_ae7e8da06fb3335f5b138b2b1d\` (\`category_name_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Descriptions\` (\`product_id\` int NOT NULL, \`content\` text NOT NULL, PRIMARY KEY (\`product_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Product_Attributes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_id\` int NOT NULL, \`category_attribute_id\` int NOT NULL, \`value\` text NOT NULL, UNIQUE INDEX \`check_unique\` (\`category_attribute_id\`, \`product_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_name\` varchar(255) NOT NULL, \`product_name_ascii\` varchar(255) NOT NULL, \`image_url\` varchar(255) NULL, \`category_id\` int NOT NULL, \`brand_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_7b2a734bc0120cc36f185be066\` (\`product_name_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image_url\` varchar(255) NOT NULL, \`public_id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`size\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Brands\` ADD CONSTRAINT \`FK_7a24bd44c57fd0fd49786621399\` FOREIGN KEY (\`category_id\`) REFERENCES \`Categories\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Category_Attributes\` ADD CONSTRAINT \`FK_d0e24a404e43567cb89f2193d6d\` FOREIGN KEY (\`category_id\`) REFERENCES \`Categories\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`Descriptions\` ADD CONSTRAINT \`FK_8975a7c6c73d460f178166839c9\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` ADD CONSTRAINT \`FK_e47fe18527fa40917debde28331\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` ADD CONSTRAINT \`FK_fb9ed8ad7d1656ee2a240b5dec6\` FOREIGN KEY (\`category_attribute_id\`) REFERENCES \`Category_Attributes\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_686fd033da4d2d5954daab89290\` FOREIGN KEY (\`category_id\`) REFERENCES \`Categories\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_dee1cbb4f35247ae4ca2685594b\` FOREIGN KEY (\`brand_id\`) REFERENCES \`Brands\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_dee1cbb4f35247ae4ca2685594b\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_686fd033da4d2d5954daab89290\``);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` DROP FOREIGN KEY \`FK_fb9ed8ad7d1656ee2a240b5dec6\``);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` DROP FOREIGN KEY \`FK_e47fe18527fa40917debde28331\``);
        await queryRunner.query(`ALTER TABLE \`Descriptions\` DROP FOREIGN KEY \`FK_8975a7c6c73d460f178166839c9\``);
        await queryRunner.query(`ALTER TABLE \`Category_Attributes\` DROP FOREIGN KEY \`FK_d0e24a404e43567cb89f2193d6d\``);
        await queryRunner.query(`ALTER TABLE \`Brands\` DROP FOREIGN KEY \`FK_7a24bd44c57fd0fd49786621399\``);
        await queryRunner.query(`DROP TABLE \`Images\``);
        await queryRunner.query(`DROP INDEX \`IDX_7b2a734bc0120cc36f185be066\` ON \`Products\``);
        await queryRunner.query(`DROP TABLE \`Products\``);
        await queryRunner.query(`DROP INDEX \`check_unique\` ON \`Product_Attributes\``);
        await queryRunner.query(`DROP TABLE \`Product_Attributes\``);
        await queryRunner.query(`DROP TABLE \`Descriptions\``);
        await queryRunner.query(`DROP INDEX \`IDX_ae7e8da06fb3335f5b138b2b1d\` ON \`Categories\``);
        await queryRunner.query(`DROP TABLE \`Categories\``);
        await queryRunner.query(`DROP INDEX \`check_unique\` ON \`Category_Attributes\``);
        await queryRunner.query(`DROP TABLE \`Category_Attributes\``);
        await queryRunner.query(`DROP INDEX \`IDX_e91deb5308ec00d47f01187326\` ON \`Brands\``);
        await queryRunner.query(`DROP TABLE \`Brands\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
    }

}
