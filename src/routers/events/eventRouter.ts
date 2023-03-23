import { Router } from "express";
import { validationBody, schemas } from "../../middleware/validationInput";
import { list, test } from '../../controller/eventController';

const eventRouter : Router = Router();

// eventRouter.post('/', validationBody(schemas.login), test);
eventRouter.post('/', test);
eventRouter.get('/', list);

export default eventRouter;