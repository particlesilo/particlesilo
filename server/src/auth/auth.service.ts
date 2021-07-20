import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginStatus, RequestStatus } from 'src/models';
import { CreateUserDto } from 'src/users/create-user.dto';
import { LoginUserDto } from 'src/users/login-user.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    async validateUser(email: string, pass:string): Promise<any>{
        try{ 
            const user = await this.usersService.findOneByEmail(email);
            if(user){
                const isMatch = await bcrypt.compare(pass, user.password);
                if(isMatch){
                    const {password, ...result } = user; 
                    return result; 
                }
                return null; 
            }
        } catch(e){
            console.error(e)
        }
    }

    async login(user: LoginUserDto) {
        const userObj = await this.validateUser(user.email, user.password);
        
        const payload = { username: userObj.email, sub: userObj.id };
        return {
            ...user,
          access_token: this.jwtService.sign(payload),
        };
      }

    async register(user: CreateUserDto): Promise<RequestStatus>{
        let status: RequestStatus = {
            success: true,   
            message: 'user registered',
        };
        try {
            await this.usersService.add(user); 
        } catch (err) {
            console.log(err); 
            status = {
                success: false,        
                message: err,
            };    
        }
        return status;  
    }

}
