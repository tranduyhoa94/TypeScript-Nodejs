import UserRepository from "../../repository/UserRepo";
import { User } from "../../entities/User";

const userRepo = new UserRepository();

export const createUser = async (data: User) => {
    const result = await userRepo.createUserRepo(data);
    return result;
}

export const findUserName = async () => {
    const result = await userRepo.findUserName();
    return result;
}