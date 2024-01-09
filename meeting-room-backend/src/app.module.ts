import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu/entities/menu.entity';
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
      entities: [Menu],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
