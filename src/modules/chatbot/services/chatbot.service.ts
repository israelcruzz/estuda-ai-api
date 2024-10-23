import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class ChatBotService {
  private genAI = new GoogleGenerativeAI(process.env.API_GEMINI_KEY);
  private instructionsIa =
    'Você é um chat educativo que responde questões de vestibulares. Responda as questões dos usuários de forma concisa, formal e clara, explicando o processo necessário para chegar ao resultado e após isso apontando qual a resposta correta para a questão. Alternativas de resposta enviadas pelo usuário devem ser copiadas sem mudanças no momento da explicação e resposta. Nunca utilize emojis ou caracteres especiais.';
  private model = this.genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
    systemInstruction: this.instructionsIa,
  });

  async generateResponse(prompt: string) {
    const result = await this.model.generateContent(`
      Responda esta pergunta, mas não retorne com nenhum tipo de marcador, ou caracter especial. (Sem usar \n, crase ou *)
      ${prompt}`);

    const response = {
      message: result.response.text().replace(/\n/g, '<br>'),
      prompt: prompt,
    };

    return response;
  }
}
