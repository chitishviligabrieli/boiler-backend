import { plainToInstance } from 'class-transformer';
import { BaseModel } from '../../crud/models/base.model';
import { TaskEntity } from '../entities/task.entity';

export class TaskModel extends BaseModel<TaskEntity> {
  toEntity(): TaskEntity {
    return plainToInstance(TaskEntity, this);
  }
}
