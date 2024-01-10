import { Controller, Post, Body, Inject, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { EmailService } from '@/email/email.service';
import { RedisService } from '@/redis/redis.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Inject(EmailService)
	private emailService: EmailService;

	@Inject(RedisService)
	private redisService: RedisService;

	@Post('register')
	async register(@Body() registerUser: RegisterUserDto) {
		return await this.userService.register(registerUser);
	}

	@Get('register-captcha')
	async registerCaptcha(@Query('address') address: string) {
		const code = Math.random().toString().slice(2, 8);

		await this.redisService.set(`captcha_${address}`, code, 60 * 5);

		await this.emailService.sendMail({
			to: address,
			subject: '注册验证码',
			html: `<p>您的验证码是：${code}</p>`,
		});
		return { code: 200, message: '验证码发送成功' };
	}

	@Get('init-data')
	async initData() {
		await this.userService.initData();
		return 'done';
	}
}
