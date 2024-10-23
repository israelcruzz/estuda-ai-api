import { OldExams, PrismaClient, Simulates } from '@prisma/client';
import { randomUUID } from 'node:crypto';

const db = new PrismaClient();

async function main() {
  const simulatesMock: Simulates[] = [
    {
      id: randomUUID(),
      name: 'Simulado - Exatas',
      about: 'EXATAS',
      coverUrl:
        'https://cdn.leonardo.ai/users/fe43965d-374e-448c-a69b-83428cf52322/generations/7e44351a-61e2-4815-8f23-dfc1bb62fbcd/Leonardo_Anime_XL_creates_a_smiling_student_studying_in_turquo_2.jpg',
      aboutContent: {
        themes: [
          {
            name: 'Matemática',
            content: 'Regra de três, Funções e Equações',
          },
          {
            name: 'Física',
            content: 'Eletricidade e magnetismo',
          },
          {
            name: 'Química',
            content: 'Reações Químicas',
          },
        ],
      },
      formsUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSf_oWpTQ8tHP4qhYgMYo3pkcNFZ7Sft_B3sVrQ5m4JhJ3Ps_g/viewform?vc=0&c=0&w=1&flr=0',
      helpVideosUrl: [
        'https://www.youtube.com/watch?v=q846Qdi-od8',
        'https://www.youtube.com/watch?v=xpv-SWbDUr8',
      ],
      questiosCount: 10,
    },
  ];

  for (const simulate of simulatesMock) {
    try {
      await db.simulates.create({ data: simulate });
      console.log(`Simulado ${simulate.id} criado!`);
    } catch (error) {
      console.error(`Erro ao criar o simulado ${simulate.id}: ${error}`);
    }
  }

  const oldExamsMock: OldExams[] = [
    {
      id: randomUUID(),
      name: 'Vestibular 2024/2 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'SEGUNDO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/47661',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2024/1 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'PRIMEIRO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/47644',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2023/2 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'PRIMEIRO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/47599',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2023/1 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'SEGUNDO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/47582',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2020/1 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'PRIMEIRO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/46998',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2019/2 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'SEGUNDO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/45606',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2019/1 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'PRIMEIRO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/47661',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2018/2 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'SEGUNDO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/42966',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2018/1 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'PRIMEIRO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/41819',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2017/2 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'SEGUNDO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/39358',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2017/1 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'PRIMEIRO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/37709',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2016/2 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'SEGUNDO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/35433',
    },
    {
      id: randomUUID(),
      name: 'Vestibular 2016/1 - Prova e Gabarito',
      year: new Date(2024, 6),
      period: 'PRIMEIRO_SEMESTRE',
      accessUrl: 'https://vestibular.brasilescola.uol.com.br/baixar/33811',
    },
  ];

  for (const oldExam of oldExamsMock) {
    try {
      await db.oldExams.create({ data: oldExam });
      console.log(`OldExam ${oldExam.name} criado!`);
    } catch (error) {
      console.error(`Erro ao criar a prova antiga ${oldExam.id}: ${error}`);
    }
  }
}

main();
