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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const users_service_1 = require("../users/users.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const TOKEN_EXPIRES = '1h';
const REFRESH_TOKEN_EXPIRES = '30d';
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(username, pass, res) {
        const foundedUser = await this.userService.findOne(username);
        if (!foundedUser || foundedUser.password !== pass) {
            throw new common_1.UnauthorizedException();
        }
        const authToken = await this.jwtService.signAsync({
            username: username,
            role: foundedUser.role,
        }, { expiresIn: TOKEN_EXPIRES, secret: process.env.JWT_SECRET });
        const refreshToken = await this.jwtService.signAsync({
            username: username,
            role: foundedUser.role,
        }, { expiresIn: REFRESH_TOKEN_EXPIRES, secret: process.env.JWT_SECRET });
        res.setHeader('Set-Cookie', 'refreshToken=asdasd; Secure; Partitioned;');
        return {
            token: authToken,
            refresh_token: refreshToken,
            user: {
                username: username,
                role: foundedUser.role,
            },
        };
    }
    async register(createUserDto) {
        return await this.userService.addOne(createUserDto);
    }
    async refresh(refreshToken) {
        const payload = await this.jwtService.verifyAsync(refreshToken, {
            secret: process.env.JWT_SECRET,
        });
        const { username, role } = payload;
        const foundedUser = await this.userService.findOne(username);
        if (!foundedUser)
            throw new common_1.UnauthorizedException();
        const newToken = await this.jwtService.signAsync({ username, role }, {
            secret: process.env.JWT_SECRET,
            expiresIn: TOKEN_EXPIRES,
        });
        return { token: newToken, user: { username, role } };
    }
    async refreshToken(request) {
        const refreshToken = request.body['refresh_token'];
        if (!refreshToken)
            throw new common_1.UnauthorizedException();
        try {
            const payload = await this.refresh(refreshToken);
            return payload;
        }
        catch (error) {
            throw new common_1.ForbiddenException();
        }
    }
    async refreshTokenWithCookie(req) {
        try {
            return req.cookies;
        }
        catch (error) {
            throw new common_1.ForbiddenException();
        }
    }
    async logout(res) {
        res.clearCookie('refresh_token');
        return res.sendStatus(200);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map