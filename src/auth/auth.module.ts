import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from './local.strategy';

@Module({
   imports: [TypeOrmModule.forFeature([User]),
   PassportModule.register({defaultStrategy:'jwt'}),
   JwtModule.register({
    secret: 'abcdABCD1234554321',
    signOptions: {
      expiresIn: 3600,
    },
  }),
  ],
  providers: [AuthService,localStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
