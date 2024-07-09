import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { TasksService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Task } from './task.entity';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto, @Req() req: RequestWithUser): Promise<Task> {
    return this.tasksService.createTask(createTaskDto, req.user);
  }

  @Get()
  async getTasks(@Req() req: RequestWithUser): Promise<Task[]> {
    return this.tasksService.getTasks(req.user);
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number, @Req() req: RequestWithUser): Promise<Task> {
    return this.tasksService.getTaskById(id, req.user);
  }

  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto, @Req() req: RequestWithUser): Promise<Task> {
    return this.tasksService.updateTask(id, updateTaskDto, req.user);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number, @Req() req: RequestWithUser): Promise<void> {
    return this.tasksService.deleteTask(id, req.user);
  }
}
