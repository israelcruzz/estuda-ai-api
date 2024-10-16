import { OldExams } from '@prisma/client';

export abstract class IOldExamsRepository {
  abstract getAll(page: number): Promise<OldExams[]>;
}
