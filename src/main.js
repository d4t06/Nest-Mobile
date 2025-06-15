"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: [
            'http://localhost:3000',
            'https://next-mobile-ebon.vercel.app',
            'https://nuxt-mobile.netlify.app',
        ],
    });
    app.use((0, cookie_parser_1.default)());
    app.setGlobalPrefix('api');
    const PORT = process.env.PORT || 4000;
    await app.listen(PORT, () => {
        console.log(`App running on port:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map