import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validationBody = (schema: Joi.AnySchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const results = schema.validate(req.body);
        next();
    }
}

export const schemas = {
    login : Joi.object({
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
}
