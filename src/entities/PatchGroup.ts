import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Character } from './Character';

@Entity({ name: 'patch_groups' })
export class PatchGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  characterId: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ManyToOne(() => Character)
  @JoinColumn({ name: 'characterId' })
  character: Character;
}
