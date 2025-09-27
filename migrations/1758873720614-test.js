"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1758873720614 = void 0;
class Test1758873720614 {
    constructor() {
        this.name = 'Test1758873720614';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`Product_Features\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_id\` int NOT NULL, \`value\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Product_Features\` ADD CONSTRAINT \`FK_567d2c0b5940505a04d4c0bb946\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`Product_Features\` DROP FOREIGN KEY \`FK_567d2c0b5940505a04d4c0bb946\``);
        await queryRunner.query(`DROP TABLE \`Product_Features\``);
    }
}
exports.Test1758873720614 = Test1758873720614;
//# sourceMappingURL=1758873720614-test.js.map