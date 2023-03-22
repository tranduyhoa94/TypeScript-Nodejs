import { Router } from "express";
import { validationBody, schemas } from "../../middleware/validationInput";
import { test } from '../../controller/eventController';

const eventRouter : Router = Router();

eventRouter.post('/', validationBody(schemas.login), test);

export default eventRouter;