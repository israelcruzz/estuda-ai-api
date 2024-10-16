import { Module } from '@nestjs/common';
import { OldExamsController } from './controllers/old-exams.controller';
import { PrismaService } from 'src/shared/services/database/prisma.service';
import { OldExamsService } from './services/old-exams.service';
import { IOldExamsRepository } from './repositories/old-exams-repository.interface';
import { PrismaOldExamsRepository } from './repositories/prisma-old-exams.repository';

@Module({
  imports: [],
  controllers: [OldExamsController],
  providers: [
    PrismaService,
    OldExamsService,
    {
      provide: IOldExamsRepository,
      useClass: PrismaOldExamsRepository,
    },
  ],
  exports: [],
})
export class OldExamsModule {}
