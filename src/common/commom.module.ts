import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BcryptyHashingService } from './hashing/bcrypt-hashing.service';

@Module({
  providers: [
    {
      provide: HashingService,
      useClass: BcryptyHashingService,
    },
  ],
  exports: [HashingService],
})
export class CommonModule {}
