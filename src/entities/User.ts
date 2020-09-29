import bcrypt from 'bcrypt';
import { IsEmail, validateOrReject } from 'class-validator';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text', nullable: true })
  @IsEmail(undefined, { message: 'Incorect Email' })
  email: string | null;

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'text', nullable: true })
  phoneNumber: string;

  @Column({ type: 'boolean', default: false })
  verifiedPhoneNumber: boolean;

  @Column({ type: 'text', nullable: true })
  profilePhoto: string;

  @Column({ type: 'text', nullable: true })
  fbId: string;

  @Column('jsonb', { nullable: true })
  friendsList: User[];

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async validate(): Promise<void> {
    try {
      await validateOrReject(this, { validationError: { target: false } });
    } catch (errors) {
      throw new Error(
        errors[0].constraints[Object.keys(errors[0].constraints)[0]]
      );
    }
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashPassword = await this.hashPassword(this.password);
      this.password = hashPassword;
    }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
  }
}

export default User;
