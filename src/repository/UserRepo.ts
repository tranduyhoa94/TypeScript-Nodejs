import { BaseRepository } from './BaseRepository';
import { User } from '../entities/User';

export default class UserRepository extends BaseRepository<User> {
    constructor() {
        super(User);
    }

    public test() {
        console.log(123123123);
    }
}