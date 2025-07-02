import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserCharacter } from './UserCharacter';
import { PatchGroup } from './PatchGroup';
import { Item } from './Item';

@Entity({ name: 'user_character_customizations' })
export class UserCharacterCustomization {
  @PrimaryColumn({ type: 'int' })
  userCharacterId: number;

  @PrimaryColumn({ type: 'int' })
  patchGroupId: number;

  @Column({ type: 'int' })
  itemId: number;

  @ManyToOne(() => UserCharacter)
  @JoinColumn({ name: 'userCharacterId' })
  userCharacter: UserCharacter;

  @ManyToOne(() => PatchGroup)
  @JoinColumn({ name: 'patchGroupId' })
  patchGroup: PatchGroup;

  @ManyToOne(() => Item)
  @JoinColumn({ name: 'itemId' })
  item: Item;
}
