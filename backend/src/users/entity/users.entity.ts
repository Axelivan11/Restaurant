import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Lastname: string;

  @Column({ unique: true })
  Username: string;

  @Column({ unique: true })
  Email: string;

  @Column()
  Password: string;
}
