import { ObjectType } from 'typeorm';
import RepositoryInterface from '../interface/RepositoryInterface';

export abstract class BaseRepository<T> implements RepositoryInterface<T> {
  private modelType: ObjectType<T>;

  protected constructor(modelType: ObjectType<T>) {
    console.log(modelType);
    this.modelType = modelType;
  }

  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  create(item: T): Promise<T> {
    console.log(item, this.modelType);
    throw new Error('Method not implemented.');
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

}