"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1724325400503 = void 0;
class Test1724325400503 {
    constructor() {
        this.name = 'Test1724325400503';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`Comments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`approved\` tinyint NOT NULL, \`date_diff\` varchar(255) NOT NULL, \`content\` text NOT NULL, \`product_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Categories\` CHANGE \`attribute_order\` \`attribute_order\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_dee1cbb4f35247ae4ca2685594b\``);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`image_url\` \`image_url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`brand_id\` \`brand_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Comments\` ADD CONSTRAINT \`FK_863ae7300f5b944848f8becfac6\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_dee1cbb4f35247ae4ca2685594b\` FOREIGN KEY (\`brand_id\`) REFERENCES \`Brands\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_dee1cbb4f35247ae4ca2685594b\``);
        await queryRunner.query(`ALTER TABLE \`Comments\` DROP FOREIGN KEY \`FK_863ae7300f5b944848f8becfac6\``);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`brand_id\` \`brand_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`image_url\` \`image_url\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_dee1cbb4f35247ae4ca2685594b\` FOREIGN KEY (\`brand_id\`) REFERENCES \`Brands\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Categories\` CHANGE \`attribute_order\` \`attribute_order\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`Comments\``);
    }
}
exports.Test1724325400503 = Test1724325400503;
//# sourceMappingURL=1724325400503-test.js.map