import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'Images' })
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image_url: string;

  @Column()
  public_id: string;

  @Column()
  name: string;

  @Column()
  size: number;

  constructor(image: Partial<Image>) {
    Object.assign(this, image);
  }
}
