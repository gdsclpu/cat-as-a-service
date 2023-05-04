import { Router } from "express";
import CatsRoutes from "./cats.routes";
import ViewsRoutes from "./views.routes";

const route = Router();

route.use("/", ViewsRoutes);
route.use("/api", CatsRoutes);

export default route;
