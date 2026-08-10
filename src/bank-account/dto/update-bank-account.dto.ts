import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateBankAccountDto } from './create-bank-account.dto';
import { IsOptional } from 'class-validator';

export class UpdateBankAccountDto extends PartialType(
  PickType(CreateBankAccountDto, ['name', 'type', 'coverImageUrl']),
) {
  @IsOptional()
  active?: boolean;
}
