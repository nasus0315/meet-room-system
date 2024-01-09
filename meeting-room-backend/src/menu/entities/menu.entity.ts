import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  path: string;

  @Column()
  parentId: number;

  @Column()
  order: number;

  @Column()
  icon: string;
}
