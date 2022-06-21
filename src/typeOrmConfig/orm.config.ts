import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";


export const typeOrmConfig:TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    port:5432, 
    username:'postgres',
    password:'abc123',
    database:'ahmed',
    entities:[User],
    synchronize:true
    };