import { Injectable, NotFoundException } from '@nestjs/common';
import { IOldExamsRepository } from '../repositories/old-exams-repository.interface';
import { OldExams } from '@prisma/client';

@Injectable()
export class OldExamsService {
  private readonly _oldExamsRepository: IOldExamsRepository;

  constructor(oldExamsRepository: IOldExamsRepository) {
    this._oldExamsRepository = oldExamsRepository;
  }

  public async getAll(page: number): Promise<OldExams[]> {
    const oldExams = await this._oldExamsRepository.getAll(page);

    if (!oldExams) {
      throw new NotFoundException();
    }

    return oldExams;
  }
}
