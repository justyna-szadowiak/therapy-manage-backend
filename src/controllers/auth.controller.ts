import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { JwtToken } from '../interfaces/jwt-token';
import { LoginGuard } from '../guards/login.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @UseGuards(LoginGuard)
  @Post('login')
  async logIn(@Request() req): Promise<JwtToken> {
    return this.authService.logIn(req.user);
  }
}
