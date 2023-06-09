export default interface RepositoryInterface<T> {
    find(item: T): Promise<T[]>;

    findOne(id: string): Promise<T>;

    create(item: T): Promise<T>;

    update(id: string, item: T): Promise<boolean>;

    delete(id: string): Promise<T>;
}