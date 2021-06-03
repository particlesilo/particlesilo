import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
    constructor( 
        @InjectRepository(User)
        private usersRepository: Repository<User>, 
    ){}
    
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
    findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
    }

    findOneByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({email: email})
    }

    async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
    }

    async add(user: CreateUserDto): Promise<User> {
        const userExists = await this.usersRepository.findOne({email: user.email}); 
        if (userExists){ 
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST); 
        }
        const salt = await bcrypt.genSalt() 
        const hash = await bcrypt.hash(user.password, salt)
        user.password = hash; 
        const res = await this.usersRepository.save(user); 
        return res; 
    }
}
