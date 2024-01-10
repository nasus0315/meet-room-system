import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';

@Module({
	// sercvice中注入 Repository 需要在 UserModule 里引入下 TypeOrm.forFeature
	imports: [TypeOrmModule.forFeature([User, Role, Permission])],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
