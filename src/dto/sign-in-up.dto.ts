import { IsBoolean, IsString, MaxLength, MinLength } from "class-validator";

export class signinDto{
    @IsString()
    email: string;
    @IsString()
    password: string;
}

export class signupDto{
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsString()
    email: string;
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password: string;
    isActive: boolean;
}