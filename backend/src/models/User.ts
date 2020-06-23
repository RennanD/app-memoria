import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import ImportantDate from './ImportantDate';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('time with time zone')
  birthday: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf: string;

  @Column()
  gender: string;

  @Column()
  zipcode: string;

  @Column()
  address: string;

  @Column()
  role: string;

  @OneToMany(() => ImportantDate, date => date, { eager: true })
  dates: ImportantDate[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('time with time zone')
  deleted_at: Date;
}

export default User;
