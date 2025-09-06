import { v2 } from 'cloudinary';
import sharp from 'sharp';

export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    });
  }

  async uploadImage(file: Express.Multer.File, width?: number) {
    const { buffer, mimetype } = file;

    const _width = width && !isNaN(+width) && +width >= 100 ? +width : 500;

    const start = Date.now();

    const newImageBuffer = await sharp(buffer)
      .resize({
        width: _width,
      })
      .png({ quality: 80 })
      .toBuffer();

    const b64 = Buffer.from(newImageBuffer).toString('base64');
    let dataURI = 'data:' + mimetype + ';base64,' + b64;

    const imageUploadRes = await v2.uploader.upload(dataURI, {
      folder: 'mobile-wars',
      resource_type: 'auto',
    });

    const finish = Date.now();

    console.log(
      `Upload image ${_width} finished after, ${(finish - start) / 1000}`,
    );

    return imageUploadRes;
  }

  async deleteImage(public_id: string) {
    await v2.uploader.destroy(public_id);
  }
}
