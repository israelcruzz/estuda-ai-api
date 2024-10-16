import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class GenerateResponseDto {
  @IsNotEmpty({ message: 'O prompt não pode estar vazio' })
  @IsString({ message: 'O prompt deve ser uma string' })
  @MinLength(3, { message: 'O prompt deve ter pelo menos 3 caracteres' })
  @MaxLength(250, { message: 'O prompt deve ter no maximo 250 caracteres' })
  prompt: string;
}
