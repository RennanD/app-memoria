import {
  ObjectID,
  ObjectIdColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('preferences')
class Preference {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  category: string;

  @Column()
  subcategoties: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  deleted_at: Date;
}

export default Preference;
