import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { signinDto, signupDto } from 'src/dto/sign-in-up.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService : AuthService){
   }
   
   @Post("signUp")
   signUp(@Body(ValidationPipe) userdata : signupDto){
    return this.authService.signUp(userdata);
   }

   @Post("signIn")
   signIn(@Body(ValidationPipe) userdata : signinDto){
    return this.authService.signIn(userdata);
   }
   
   @UseGuards(AuthGuard('jwt'))
   @Get("alluser")
   allUser(){
     return this.authService.findAll();
   }

}
