import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  // { cors: true } allow us for Cross Domain AJAX Request
  const app = await NestFactory.create(AppModule, { cors: true });

  // disable detailed validation error messages
  // app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  await app.listen(process.env.PORT);
}
bootstrap();
