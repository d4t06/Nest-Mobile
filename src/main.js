"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
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
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT || 4000, () => {
        console.log(`App running on port:${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map