import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/database/prisma.service';
import { IOldExamsRepository } from './old-exams-repository.interface';
import { OldExams } from '@prisma/client';

@Injectable()
export class PrismaOldExamsRepository implements IOldExamsRepository {
  private readonly _db: PrismaService;
  private pageSize: number = 5;

  constructor(db: PrismaService) {
    this._db = db;
  }

  public async getAll(page: number): Promise<OldExams[]> {
    const pageNumber = page > 0 ? page : 1;

    const oldExams = await this._db.oldExams.findMany({
      take: this.pageSize,
      skip: (pageNumber - 1) * this.pageSize,
    });

    return oldExams;
  }
}
