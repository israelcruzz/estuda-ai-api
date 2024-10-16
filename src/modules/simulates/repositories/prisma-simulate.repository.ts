import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/database/prisma.service';
import { ISimulateRepository } from './simulate-repository.interface';
import { Simulates } from '@prisma/client';

@Injectable()
export class PrismaSimulateRepository implements ISimulateRepository {
  private readonly _db: PrismaService;
  private pageSize: number = 10;

  constructor(db: PrismaService) {
    this._db = db;
  }

  public async getAll(page: number): Promise<Simulates[]> {
    const pageNumber = page > 0 ? page : 1;

    const simulates = await this._db.simulates.findMany({
      take: this.pageSize,
      skip: (pageNumber - 1) * this.pageSize,
      orderBy: {
        aboutContent: 'asc',
      },
    });

    return simulates;
  }

  public async getById(id: string): Promise<Simulates | null> {
    const simulate = await this._db.simulates.findUnique({
      where: {
        id,
      },
    });

    return simulate;
  }
}
