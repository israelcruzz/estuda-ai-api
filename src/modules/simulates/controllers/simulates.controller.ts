import { Controller, Get, Param, Query } from '@nestjs/common';
import { SimulatesService } from '../services/simulates.service';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('/simulates')
@ApiTags('simulates')
export class SimulatesController {
  private readonly _simulatesService: SimulatesService;

  constructor(simulatesService: SimulatesService) {
    this._simulatesService = simulatesService;
  }

  @Get('/all')
  @ApiOperation({ summary: 'Recupera todos os simulados' })
  @ApiResponse({
    status: 200,
    description: 'Retorna todos os simulados.',
    isArray: true,
  })
  @ApiResponse({ status: 404, description: 'Simulados não encontrados' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Pagína atual',
    schema: { type: 'number' },
  })
  public async getAll(@Query('page') page: number) {
    return await this._simulatesService.getAll(page);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Recupera um simulado' })
  @ApiResponse({ status: 200, description: 'Retorna os dados de um simulado.' })
  @ApiResponse({
    status: 404,
    description: 'Simulado não encontrado',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID do simulado',
    schema: { type: 'string' },
  })
  public async getById(@Param('id') id: string) {
    return await this._simulatesService.getById(id);
  }
}
