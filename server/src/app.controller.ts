import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/create-user.dto';
import { LoginUserDto } from './users/login-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Post('auth/signup')
  async signup(@Body() user: CreateUserDto){
    return this.authService.register(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('user')
  async getUser(@Request() req){
    return req.user;
  }

  @Post('auth/login')
  async login(@Body() user: LoginUserDto){ 
    return this.authService.login(user);
  }

}
