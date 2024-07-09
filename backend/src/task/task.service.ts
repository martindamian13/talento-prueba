import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.tasksRepository.create({
      title,
      description,
      status: TaskStatus.PENDING,
      user,
    });

    await this.tasksRepository.save(task);
    return task;
  }

  async getTasks(user: User, status?: TaskStatus): Promise<Task[]> {
    const query = this.tasksRepository.createQueryBuilder('task');

    query.where('task.userId = :userId', { userId: user.id });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async getTaskById(id: number, user: User): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id, user } });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto, user: User): Promise<Task> {
    const task = await this.getTaskById(id, user);

    if (updateTaskDto.title) {
      task.title = updateTaskDto.title;
    }
    if (updateTaskDto.status) {
      task.status = updateTaskDto.status;
    }

    await this.tasksRepository.save(task);
    return task;
  }

  async deleteTask(id: number, user: User): Promise<void> {
    const result = await this.tasksRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
