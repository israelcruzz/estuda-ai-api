import { Module } from '@nestjs/common';
import { SimulatesModule } from './modules/simulates/simulates.module';
import { OldExamsModule } from './modules/old-exams/old-exams.module';
import { ChatBotModule } from './modules/chatbot/chatbot.module';

@Module({
  imports: [SimulatesModule, OldExamsModule, ChatBotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
