import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu/entities/menu.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Role } from './user/entities/role.entity';
import { Permission } from './user/entities/permission.entity';
import { RedisModule } from './redis/redis.module';
@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'ss112233',
			database: 'meet_room_system',
			synchronize: true,
			logging: true,
			entities: [Menu, User, Role, Permission],
			poolSize: 10,
			connectorPackage: 'mysql2',
			extra: {
				authPlugin: 'sha256_password',
			},
		}),
		MenuModule,
		UserModule,
		RedisModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
