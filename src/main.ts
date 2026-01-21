import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  
  const config = new DocumentBuilder()
    .setTitle('Hardware Store') //Titulo de la documentación 
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('Hardware') //Etiqueta que organiza la documentación
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory,{ //URL para acceder a la documentación
    jsonDocumentUrl: 'docs/json' //URL para acceder al archivo JSON
  });  

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Delete properties that not are in DTO
      forbidNonWhitelisted: true //Trow error if not permitted field
    })
  )
  await app.listen(process.env.PORT ?? 3000);
};

bootstrap();
