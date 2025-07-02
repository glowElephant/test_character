import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Package } from './Package';
import { PatchGroup } from './PatchGroup';

@Entity({ name: 'items' })
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  packageId: number;

  @Column({ type: 'int' })
  patchGroupId: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'int', default: 50 })
  price: number;

  @Column({ type: 'jsonb', nullable: true })
  metadata?: any;

  @Column({ type: 'varchar', length: 500 })
  originalImageUrl: string;

  @Column({ type: 'varchar', length: 500 })
  webImageUrl: string;

  @Column({ type: 'bool', default: false })
  isDefault: boolean;

  @ManyToOne(() => Package)
  @JoinColumn({ name: 'packageId' })
  package: Package;

  @ManyToOne(() => PatchGroup)
  @JoinColumn({ name: 'patchGroupId' })
  patchGroup: PatchGroup;
}
