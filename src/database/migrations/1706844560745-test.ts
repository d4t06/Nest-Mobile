import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1706844560745 implements MigrationInterface {
    name = 'Test1706844560745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Category_Attributes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_id\` int NOT NULL, \`attribute_ascii\` varchar(255) NOT NULL, \`attribute_name\` varchar(255) NOT NULL, \`represent\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`check_unique\` (\`category_id\`, \`attribute_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_name\` varchar(255) NOT NULL, \`category_ascii\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e239813b59d349693803c37148\` (\`category_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_name\` varchar(255) NOT NULL, \`product_ascii\` varchar(255) NOT NULL, \`image_url\` varchar(255) NULL, \`category_id\` int NOT NULL, UNIQUE INDEX \`IDX_3175bb6d1592e41514b79a1674\` (\`product_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Product_Attributes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_id\` int NOT NULL, \`category_attribute_id\` int NOT NULL, \`value\` text NOT NULL, UNIQUE INDEX \`check_unique\` (\`category_attribute_id\`, \`product_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Category_Attributes\` ADD CONSTRAINT \`FK_d0e24a404e43567cb89f2193d6d\` FOREIGN KEY (\`category_id\`) REFERENCES \`Categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_686fd033da4d2d5954daab89290\` FOREIGN KEY (\`category_id\`) REFERENCES \`Categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` ADD CONSTRAINT \`FK_e47fe18527fa40917debde28331\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` ADD CONSTRAINT \`FK_fb9ed8ad7d1656ee2a240b5dec6\` FOREIGN KEY (\`category_attribute_id\`) REFERENCES \`Category_Attributes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` DROP FOREIGN KEY \`FK_fb9ed8ad7d1656ee2a240b5dec6\``);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` DROP FOREIGN KEY \`FK_e47fe18527fa40917debde28331\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_686fd033da4d2d5954daab89290\``);
        await queryRunner.query(`ALTER TABLE \`Category_Attributes\` DROP FOREIGN KEY \`FK_d0e24a404e43567cb89f2193d6d\``);
        await queryRunner.query(`DROP INDEX \`check_unique\` ON \`Product_Attributes\``);
        await queryRunner.query(`DROP TABLE \`Product_Attributes\``);
        await queryRunner.query(`DROP INDEX \`IDX_3175bb6d1592e41514b79a1674\` ON \`Products\``);
        await queryRunner.query(`DROP TABLE \`Products\``);
        await queryRunner.query(`DROP INDEX \`IDX_e239813b59d349693803c37148\` ON \`Categories\``);
        await queryRunner.query(`DROP TABLE \`Categories\``);
        await queryRunner.query(`DROP INDEX \`check_unique\` ON \`Category_Attributes\``);
        await queryRunner.query(`DROP TABLE \`Category_Attributes\``);
    }

}
