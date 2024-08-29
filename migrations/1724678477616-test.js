"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1724678477616 = void 0;
class Test1724678477616 {
    constructor() {
        this.name = 'Test1724678477616';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`approved\` \`approved\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`date_diff\` \`date_diff\` varchar(255) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`date_diff\` \`date_diff\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Comments\` CHANGE \`approved\` \`approved\` tinyint NOT NULL`);
    }
}
exports.Test1724678477616 = Test1724678477616;
//# sourceMappingURL=1724678477616-test.js.map