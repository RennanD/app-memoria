import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

import Contact from './Contact';
import User from './User';

@Entity('important_dates')
class ImportantDate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Contact, contact => contact.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'contact_id' })
  contact: Contact;

  @Column()
  contact_id: string;

  @ManyToOne(() => User, user => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ImportantDate;
