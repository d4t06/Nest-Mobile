/// <reference types="multer" />
export declare class CloudinaryService {
    constructor();
    uploadImage(file: Express.Multer.File, width?: number): Promise<import("cloudinary").UploadApiResponse>;
    deleteImage(public_id: string): Promise<void>;
}
