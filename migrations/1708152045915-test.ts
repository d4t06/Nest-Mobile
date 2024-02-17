import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1708152045915 implements MigrationInterface {
    name = 'Test1708152045915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_686fd033da4d2d5954daab89290\` FOREIGN KEY (\`category_id\`) REFERENCES \`Categories\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` ADD CONSTRAINT \`FK_e47fe18527fa40917debde28331\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` ADD CONSTRAINT \`FK_fb9ed8ad7d1656ee2a240b5dec6\` FOREIGN KEY (\`category_attribute_id\`) REFERENCES \`Category_Attributes\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` DROP FOREIGN KEY \`FK_fb9ed8ad7d1656ee2a240b5dec6\``);
        await queryRunner.query(`ALTER TABLE \`Product_Attributes\` DROP FOREIGN KEY \`FK_e47fe18527fa40917debde28331\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_686fd033da4d2d5954daab89290\``);
    }

}
