"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1736064882002 = void 0;
class Migrations1736064882002 {
    constructor() {
        this.name = 'Migrations1736064882002';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_e91deb5308ec00d47f01187326\` ON \`Brands\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`check_unique_brand\` ON \`Brands\` (\`category_id\`, \`brand_name_ascii\`)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`check_unique_brand\` ON \`Brands\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e91deb5308ec00d47f01187326\` ON \`Brands\` (\`brand_name_ascii\`)`);
    }
}
exports.Migrations1736064882002 = Migrations1736064882002;
//# sourceMappingURL=1736064882002-test.js.map