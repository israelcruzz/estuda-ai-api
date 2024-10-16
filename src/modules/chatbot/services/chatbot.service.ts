import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class ChatBotService {
  private genAI = new GoogleGenerativeAI(process.env.API_GEMINI_KEY);
  private instructionsIa =
    'Você é um especialista em educação, com foco exclusivo em responder perguntas sobre a ETEC. Sempre que questionado, baseie suas respostas em informações precisas e relevantes sobre a instituição. Responda de maneira clara e direta, utilizando apenas texto simples, sem o uso de caracteres especiais. Mantenha um tom acessível e envolvente, garantindo que sua comunicação seja compreensível e atrativa para todos os públicos.';
  private model = this.genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: this.instructionsIa,
  });

  async generateResponse(prompt: string) {
    const result = await this.model.generateContent(`
      Responda esta pergunta, mas não retorne com nenhum tipo de marcador, ou caracter especial. (Sem usar \n, crase ou *)
      ${prompt}`);
    console.log(result.response.text());

    const response = {
      message: result.response.text(),
      prompt: prompt,
    };

    return response;
  }
}
