/// <reference types="multer" />
export declare class CloudinaryService {
    constructor();
    uploadImage(file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse>;
    deleteImage(public_id: string): Promise<void>;
}
