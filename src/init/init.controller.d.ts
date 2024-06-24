import { UsersService } from '@/users/users.service';
export declare class InitController {
    private readonly userService;
    constructor(userService: UsersService);
    init(createDto: {
        password: string;
    }): void;
}
