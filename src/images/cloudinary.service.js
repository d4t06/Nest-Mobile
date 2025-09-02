"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const cloudinary_1 = require("cloudinary");
const sharp_1 = __importDefault(require("sharp"));
class CloudinaryService {
    constructor() {
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET,
        });
    }
    async uploadImage(file, width) {
        const { buffer, mimetype } = file;
        const _width = width && !isNaN(+width) && +width >= 100 ? +width : 500;
        const start = Date.now();
        const newImageBuffer = await (0, sharp_1.default)(buffer)
            .resize({
            width: _width,
        })
            .png({ quality: 80 })
            .toBuffer();
        const b64 = Buffer.from(newImageBuffer).toString('base64');
        let dataURI = 'data:' + mimetype + ';base64,' + b64;
        const imageUploadRes = await cloudinary_1.v2.uploader.upload(dataURI, {
            folder: 'mobile-wars',
            resource_type: 'auto',
        });
        const finish = Date.now();
        console.log(`Upload image ${_width} finished after, ${(finish - start) / 1000}`);
        return imageUploadRes;
    }
    async deleteImage(public_id) {
        await cloudinary_1.v2.uploader.destroy(public_id);
    }
}
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map