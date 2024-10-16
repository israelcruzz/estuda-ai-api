import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OldExamsService } from '../services/old-exams.service';

@Controller()
@ApiTags('old-exams')
export class OldExamsController {
  private readonly _oldExasmService: OldExamsService;

  constructor(oldExamsService: OldExamsService) {
    this._oldExasmService = oldExamsService;
  }

  @Get('/all')
  @ApiOperation({ summary: 'Recupera todas as provas antigas' })
  @ApiResponse({
    status: 200,
    description: 'Retorna todas as provas.',
    isArray: true,
  })
  @ApiResponse({ status: 404, description: 'Provas não encontradas' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Pagína atual',
    schema: { type: 'number' },
  })
  public async getAll(@Query('page') page: number) {
    return await this._oldExasmService.getAll(page);
  }
}
