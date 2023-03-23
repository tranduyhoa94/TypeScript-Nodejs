import { createUser, findUserName } from '../services/user/UserService';
import { Request, Response, NextFunction } from "express";

export const test = async (req: Request, res: Response, next: NextFunction) => {
    const result = await createUser(req.body);

    return res.status(200).json({
        "data" : result,
        "status" : true
    })
}

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const result = await findUserName();

    return res.status(200).json({
        "data" : result,
        "status" : true
    })
}