import { Router } from "express";
import ViewsController from "../controllers/views.controller";
const viewsController = new ViewsController();

const route = Router();

route.get("/", viewsController.index);

route.get("/about", viewsController.about);

route.get("/contact", viewsController.contact);

route.get("/cats", viewsController.cats);

route.get("/docs", viewsController.docs);

export default route;
