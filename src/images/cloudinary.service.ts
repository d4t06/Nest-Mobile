import { v2 } from 'cloudinary';

export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    });
  }

  async uploadImage(file: Express.Multer.File) {
    const { buffer, mimetype } = file;

    const b64 = Buffer.from(buffer).toString('base64');
    let dataURI = 'data:' + mimetype + ';base64,' + b64;

    const imageUploadRes = await v2.uploader.upload(dataURI, {
      folder: 'mobile-wars',
      resource_type: 'auto',
    });

    return imageUploadRes;
  }
}
