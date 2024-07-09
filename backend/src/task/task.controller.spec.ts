import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
