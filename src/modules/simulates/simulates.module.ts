import { Module } from '@nestjs/common';
import { SimulatesController } from './controllers/simulates.controller';
import { PrismaService } from 'src/shared/services/database/prisma.service';
import { PrismaSimulateRepository } from './repositories/prisma-simulate.repository';
import { ISimulateRepository } from './repositories/simulate-repository.interface';
import { SimulatesService } from './services/simulates.service';

@Module({
  imports: [],
  controllers: [SimulatesController],
  providers: [
    PrismaService,
    SimulatesService,
    {
      provide: ISimulateRepository,
      useClass: PrismaSimulateRepository,
    },
  ],
  exports: [],
})
export class SimulatesModule {}
