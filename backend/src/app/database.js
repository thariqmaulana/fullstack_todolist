import { PrismaClient } from "@prisma/client"
import { logger } from "./logger.js";

export const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'event',
      level: 'info',
    },
    {
      emit: 'event',
      level: 'warn',
    },
  ]
});

prisma.$on('error', (errornya) => {
  logger.error(errornya)
})

prisma.$on('warn', (errornya) => {
  logger.warn(errornya)
})

prisma.$on('info', (errornya) => {
  logger.info(errornya)
})

prisma.$on('query', (errornya) => {
  logger.info(errornya)
})
