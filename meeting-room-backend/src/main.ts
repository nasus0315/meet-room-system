import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	// ValidationPipe，来对请求体做校验。
	app.useGlobalPipes(new ValidationPipe());
	const configService = app.get(ConfigService);
	await app.listen(configService.get('nest_server_port'));
}
bootstrap();
