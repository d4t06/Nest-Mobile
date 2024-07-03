"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const products_module_1 = require("./products/products.module");
const categories_module_1 = require("./categories/categories.module");
const database_module_1 = require("./database/database.module");
const images_module_1 = require("./images/images.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const init_controller_1 = require("./init/init.controller");
const brand_module_1 = require("./brand/brand.module");
const description_module_1 = require("./description/description.module");
const greeting_controller_1 = require("./greeting/greeting.controller");
const product_attribute_module_1 = require("./product-attribute/product-attribute.module");
const category_attribute_module_1 = require("./category-attribute/category-attribute.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController, init_controller_1.InitController, greeting_controller_1.GreetingController],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.local'],
                isGlobal: true,
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 10000,
                    limit: 20,
                },
            ]),
            database_module_1.DatabaseModule,
            products_module_1.ProductsModule,
            categories_module_1.CategoriesModule,
            images_module_1.ImagesModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            brand_module_1.BrandModule,
            description_module_1.DescriptionModule,
            product_attribute_module_1.ProductAttributeModule,
            category_attribute_module_1.CategoryAttributeModule,
        ],
        providers: [app_service_1.AppService, { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map