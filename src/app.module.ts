import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './typeOrmConfig/orm.config';

@Module({
  imports: [AuthModule,TypeOrmModule.forRoot(typeOrmConfig)],  //  ,TypeOrmModule.forRoot(typeOrmConfig)
  controllers: [],
  providers: [],
})
export class AppModule {}
