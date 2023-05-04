import { Router } from "express";
import ViewsController from "../controllers/views.controller";
const viewsController = new ViewsController();

const route = Router();

route.get("/", viewsController.index);

export default route;
