import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
	providers: [
		RedisService,
		//添加连接 redis 的 provider
		{
			provide: 'REDIS_CLIENT',
			async useFactory(configService: ConfigService) {
				console.log(configService.get('redis_server_host'));

				const client = createClient({
					socket: {
						host: configService.get('redis_server_host'),
						port: configService.get('redis_server_port'),
					},
					database: 1,
				});
				await client.connect();
				return client; // 返回Redis客户端实例
			},
			inject: [ConfigService],
		},
	],
	exports: [RedisService],
})
export class RedisModule {}
