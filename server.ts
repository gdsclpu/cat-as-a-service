import "dotenv/config";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import expressEjsLayouts from "express-ejs-layouts";

import routes from "./routes";
import { customErrorHandler, NotFoundError } from "./libs";
import pkg from "./package.json" assert { type: "json" };
import connectDB from "./helpers/mongodb";

export const app: express.Application = express();
// const __dirname = process.cwd();

console.log("🚀", "Cat as a Service", "v" + pkg.version);

const isDev: boolean = process.env.NODE_ENV == "production";
console.log(isDev ? "🚀 Production Mode" : "👷 Development Mode");

connectDB();

app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(isDev ? "combined" : "dev"));
app.use(expressEjsLayouts);
app.use(express.static("public"));

app.use("/", routes);

app.use((req, res, next) => {
  next(new NotFoundError());
});

app.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    customErrorHandler(res, error);
  }
);

export default app;
