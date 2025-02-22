import { Expose, Type } from 'class-transformer';
import { AuthModel, RoleModel } from 'novatori/validators';
import { BaseModel } from '../base/base.model';

export class UserModel extends BaseModel {
  @Expose()
  firstName!: string;

  @Expose()
  lastName!: string;

  @Expose()
  email!: string;

  @Expose()
  @Type(() => AuthModel)
  auths!: AuthModel[];

  @Expose()
  roles!: RoleModel[];

  public getAuths(): AuthModel[] {
    return this.auths;
  }
}
