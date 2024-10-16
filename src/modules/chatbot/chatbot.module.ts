import { Module } from '@nestjs/common';
import { ChatBotController } from './controllers/chatbot.controller';
import { ChatBotService } from './services/chatbot.service';

@Module({
  controllers: [ChatBotController],
  providers: [ChatBotService],
})
export class ChatBotModule {}
