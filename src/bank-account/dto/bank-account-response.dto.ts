import { BankAccount } from '../entities/bank-account.entity';

export class BankAccountResponseDto {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly coverImageUrl: string;
  readonly active: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  constructor(bankAccount: BankAccount) {
    this.id = bankAccount.id;
    this.name = bankAccount.name;
    this.type = bankAccount.type;
    this.coverImageUrl = bankAccount.coverImageUrl;
    this.active = bankAccount.active;
    this.createdAt = bankAccount.createdAt;
    this.updatedAt = bankAccount.updatedAt;
  }
}
