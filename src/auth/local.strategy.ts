import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { signinDto } from "src/dto/sign-in-up.dto";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable() 
export class localStrategy extends PassportStrategy(Strategy,'jwt'){ 
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:'abcdABCD1234554321',
        });
    }
    
    async validate(payload:any):Promise<User>{
        console.log(payload)
        const {email}=payload;
        const finduser = await this.usersRepository
        .createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();
    
        if(!finduser){
            throw new UnauthorizedException();
        }
    
        return finduser;
    }

}