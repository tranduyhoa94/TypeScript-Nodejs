import UserRepository from '../repository/UserRepo';
import { Request, Response, NextFunction } from "express";

export const test = (req: Request, res: Response, next: NextFunction) => {
    const userRepository = new UserRepository();
    userRepository.create(req.body);
}