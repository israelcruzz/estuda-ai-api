import { Body, Controller, Post } from '@nestjs/common';
import { ChatBotService } from '../services/chatbot.service';
import { GenerateResponseDto } from '../dto/generate-response-dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('chatbot')
@ApiTags('chatbot')
export class ChatBotController {
  private _chatbotService: ChatBotService;

  constructor(chatbotService: ChatBotService) {
    this._chatbotService = chatbotService;
  }

  @Post()
  @ApiOperation({ summary: 'Responde a uma pergunta do chatbot' })
  @ApiResponse({
    status: 200,
    description: 'Resposta do chatbot',
    isArray: true,
  })
  @ApiResponse({ status: 404, description: 'Erro ao gerar resposta' })
  @ApiBody({
    type: GenerateResponseDto,
    required: true,
    description: 'Pergunta a ser respondida pelo chatbot',
    schema: { type: 'string' },
  })
  public async generateResponse(@Body() body: GenerateResponseDto) {
    const { prompt } = body;
    return await this._chatbotService.generateResponse(prompt);
  }
}
