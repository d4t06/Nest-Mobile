export declare class User {
    id: number;
    username: string;
    password: string;
    refresh_token: string;
    role: string;
    constructor(user: Partial<User>);
}
