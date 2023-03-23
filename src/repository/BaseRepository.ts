import { ObjectType, ObjectLiteral, DataSource } from 'typeorm';
import RepositoryInterface from '../interface/RepositoryInterface';
import { AppDataSource } from '../utils/dataSource';

export abstract class BaseRepository<T extends ObjectLiteral> implements RepositoryInterface<T> {
  private modelType: ObjectType<T>;
  private dataSource!: DataSource;

  protected constructor(modelType: ObjectType<T>) {
    this.modelType = modelType;
    this.getConnection();
  }

  async getConnection(): Promise<DataSource> {
    return this.dataSource = await AppDataSource.initialize();
  }

  repository() {
    return this.dataSource.getRepository(this.modelType);
  }

  async find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async create(item: T): Promise<T> {
    try {
      const repository = this.dataSource.getRepository(this.modelType);
      const result = await repository.save(item);
      return result;
    } catch(error) {
      console.log(error);
      return Promise.reject([]);
    }
  }

  async update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

}