import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Categories } from '../entity/category.entity';

@Entity('products')
export class Products {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'image_url', nullable: true })
  imageUrl: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ default: true })
  available: boolean;

  @ManyToOne(() => Categories, (Categories) => Categories.products, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'category_id' })
  category: Categories;
}