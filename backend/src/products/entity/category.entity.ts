import { Entity, Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from '../entity/products.entity';

@Entity('categories')
export class Categories {
  
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
