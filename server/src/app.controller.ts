import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/signup')
  async signup(@Request() req){
    return req.user;
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req){ 
    return req.user; 
  }
}
