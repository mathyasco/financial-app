import { IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateBankAccountDto {
  @IsString({ message: 'O nome precisa ser um texto' })
  @Length(4, 100, { message: 'O nome precisa ter entre 4 a 100 caracteres' })
  name?: string;

  @IsString({ message: 'O tipo precisa ser uma string' })
  type?: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  coverImageUrl?: string;
}
