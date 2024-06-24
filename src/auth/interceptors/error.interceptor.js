"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInterceptor = void 0;
class ErrorInterceptor {
    intercept(context, next) {
        console.log('Error interceptor');
        return next.handle();
    }
}
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=error.interceptor.js.map