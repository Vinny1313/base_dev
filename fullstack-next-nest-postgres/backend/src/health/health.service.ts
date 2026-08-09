import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  // Injetamos o PrismaService que criamos anteriormente
  constructor(private prisma: PrismaService) {}

  async checkStatus() {
    try {
      // Tenta executar uma consulta muito leve no banco de dados
      await this.prisma.$queryRaw`SELECT 1`;
      
      return {
        api: 'online',
        database: 'online',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        api: 'online',
        database: 'offline',
        timestamp: new Date().toISOString(),
      };
    }
  }
}