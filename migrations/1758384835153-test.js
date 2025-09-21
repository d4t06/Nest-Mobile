"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1758384835153 = void 0;
class Test1758384835153 {
    constructor() {
        this.name = 'Test1758384835153';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`Tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_id\` int NOT NULL, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_8b1d1866e77403e234680dcb80\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Product_Tags\` (\`product_id\` int NOT NULL, \`tag_id\` int NOT NULL, PRIMARY KEY (\`product_id\`, \`tag_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User_Like_Products\` (\`product_id\` int NOT NULL, \`user_id\` int NOT NULL, PRIMARY KEY (\`product_id\`, \`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Tags\` ADD CONSTRAINT \`FK_e4fd4ba97fc57485932a120ae47\` FOREIGN KEY (\`category_id\`) REFERENCES \`Categories\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product_Tags\` ADD CONSTRAINT \`FK_b336995aa1d8706c7696dea08bb\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product_Tags\` ADD CONSTRAINT \`FK_c0086d7fd9aaeb231746fdd8879\` FOREIGN KEY (\`tag_id\`) REFERENCES \`Tags\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User_Like_Products\` ADD CONSTRAINT \`FK_6b4cce652270be06bb30fe7d8d0\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User_Like_Products\` ADD CONSTRAINT \`FK_507120b9ecc91fc1c908c59042c\` FOREIGN KEY (\`user_id\`) REFERENCES \`Users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`User_Like_Products\` DROP FOREIGN KEY \`FK_507120b9ecc91fc1c908c59042c\``);
        await queryRunner.query(`ALTER TABLE \`User_Like_Products\` DROP FOREIGN KEY \`FK_6b4cce652270be06bb30fe7d8d0\``);
        await queryRunner.query(`ALTER TABLE \`Product_Tags\` DROP FOREIGN KEY \`FK_c0086d7fd9aaeb231746fdd8879\``);
        await queryRunner.query(`ALTER TABLE \`Product_Tags\` DROP FOREIGN KEY \`FK_b336995aa1d8706c7696dea08bb\``);
        await queryRunner.query(`ALTER TABLE \`Tags\` DROP FOREIGN KEY \`FK_e4fd4ba97fc57485932a120ae47\``);
        await queryRunner.query(`DROP TABLE \`User_Like_Products\``);
        await queryRunner.query(`DROP TABLE \`Product_Tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_8b1d1866e77403e234680dcb80\` ON \`Tags\``);
        await queryRunner.query(`DROP TABLE \`Tags\``);
    }
}
exports.Test1758384835153 = Test1758384835153;
//# sourceMappingURL=1758384835153-test.js.map