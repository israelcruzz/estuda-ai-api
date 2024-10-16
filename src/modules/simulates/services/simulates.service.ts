import { Injectable, NotFoundException } from '@nestjs/common';
import { ISimulateRepository } from '../repositories/simulate-repository.interface';

@Injectable()
export class SimulatesService {
  private readonly _simulatesRepository: ISimulateRepository;

  constructor(simulateRepository: ISimulateRepository) {
    this._simulatesRepository = simulateRepository;
  }

  public async getAll(page: number) {
    const simulates = await this._simulatesRepository.getAll(page);

    if (!simulates) {
      throw new NotFoundException();
    }

    return simulates;
  }

  public async getById(id: string) {
    const simulate = await this._simulatesRepository.getById(id);

    if (!simulate) {
      throw new NotFoundException();
    }

    return simulate;
  }
}
