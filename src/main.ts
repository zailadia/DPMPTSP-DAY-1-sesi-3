import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  const options = new DocumentBuilder()
  .setTitle('API example')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('api')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  Logger.log('Application is running on: http://localhost:3000');
}
bootstrap();
git config --global user.email "you@example.com"
  git config --global user.name "Your Name"