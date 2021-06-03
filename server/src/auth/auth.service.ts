import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { RegistrationStatus } from 'src/models';
import { CreateUserDto } from 'src/users/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

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

    async register(user: CreateUserDto): Promise<RegistrationStatus>{
        let status: RegistrationStatus = {
            success: true,   
            message: 'user registered',
        };
        try {
            await this.usersService.add(user); 
        } catch (err) {
            status = {
                success: false,        
                message: err,
            };    
        }
        return status;  
    }
}
