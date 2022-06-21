import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name : "user"})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique: true})
  email: string;
  
  // you can also apply encryption and decryption on password field
  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}