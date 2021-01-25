import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('users/auth')
    async auth() {
        return this.authService.validateUser('admin', '123456');
    }
}
