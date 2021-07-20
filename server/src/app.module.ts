import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig()),],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
