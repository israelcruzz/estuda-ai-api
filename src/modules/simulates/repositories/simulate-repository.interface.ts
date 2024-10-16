import { Simulates } from '@prisma/client';

export abstract class ISimulateRepository {
  public abstract getAll(page: number): Promise<Simulates[]>;
  public abstract getById(id: string): Promise<Simulates>;
}
