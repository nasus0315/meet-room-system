import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { createClient } from 'redis';

@Global()
@Module({
	providers: [
		RedisService,
		//添加连接 redis 的 provider
		{
			provide: 'REDIS_CLIENT',
			async useFactory() {
				const client = createClient({
					socket: {
						host: 'localhost',
						port: 6379,
					},
					database: 1, // database 就是一个命名空间的概念： 把存储的 key-value 的数据放到不同命名空间下，避免冲突。
				});
				await client.connect();
				return client; // 返回Redis客户端实例
			},
		},
	],
	exports: [RedisService],
})
export class RedisModule {}
