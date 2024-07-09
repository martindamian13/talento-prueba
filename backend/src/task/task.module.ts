import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './task.service';
import { TasksController } from './task.controller';
import { Task } from './task.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    AuthModule, // Asegúrate de importar el módulo Auth si TasksService depende de User
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
