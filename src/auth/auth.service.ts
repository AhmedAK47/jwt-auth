import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { signinDto, signupDto } from 'src/dto/sign-in-up.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor( 
    @InjectRepository(User)
    private usersRepository: Repository<User>,
     
    private jwtService: JwtService
    ){}
    async signUp(userdata:signupDto){
      const result = await this.usersRepository.save(userdata);
      return result
    }
 
    async signIn(userdata:signinDto){
       const authenticate : User =  await this.usersRepository.findOne({
            where:{
                email: userdata.email,
                password : userdata.password
            }
        })
       if(authenticate){ 
           console.log()
        const {firstName ,lastName , email } = authenticate;
        const payload = {
            email:email,
            firstName: firstName,
            lastName:lastName
        }
           return {accessToken:this.jwtService.sign(payload) }
       }
       throw new NotFoundException("user not found!");
    }

    findAll(){
        return this.usersRepository.find();
    }
}
