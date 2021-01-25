import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('users/auth')
    async auth(@Request() req) {
        return this.authService.validateUser(req.body.user.email, req.body.user.password);
    }
}
