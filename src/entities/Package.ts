import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Character } from './Character';

@Entity({ name: 'packages' })
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  characterId: number;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 500 })
  thumbnailUrl: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => Character)
  @JoinColumn({ name: 'characterId' })
  character: Character;
}
