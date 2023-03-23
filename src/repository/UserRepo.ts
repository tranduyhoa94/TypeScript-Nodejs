import { BaseRepository } from './BaseRepository';
import { User } from '../entities/User';

export default class UserRepository extends BaseRepository<User> {
    constructor() {
        super(User);
    }

    async createUserRepo(data : User) {
        const result = await this.create(data);
        return result;
    }

    async findUserName() {
        const results = await this.repository().createQueryBuilder("user")
        .where("user.id = :id", { id: 1 })
        .getOne()

        return results;
    }
}