"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    constructor(entityManager, userRepository) {
        this.entityManager = entityManager;
        this.userRepository = userRepository;
    }
    async findOne(username) {
        return await this.entityManager
            .createQueryBuilder(user_entity_1.User, 'user')
            .where('user.username = :username', { username })
            .getOne();
    }
    async addOne(user) {
        const foundedUser = await this.userRepository.findOne({
            where: {
                username: user.username,
            },
        });
        console.log(foundedUser);
        if (foundedUser)
            throw new common_1.ConflictException('Username had taken');
        await this.userRepository.save(user);
        return 'ok';
    }
    async updateFreshToken(newToken, username) {
        return await this.entityManager
            .createQueryBuilder(user_entity_1.User, 'user')
            .update()
            .set({
            refresh_token: newToken,
        })
            .where('username = :username', { username: username })
            .execute();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map