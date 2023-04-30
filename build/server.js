import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routes';
import { customErrorHandler, NotFoundError } from './libs';
import pkg from './package.json' assert { type: 'json' };
import connectDB from './helpers/mongodb';
export const app = express();
console.log('🚀', 'Cat as a Service', 'v' + pkg.version);
const isDev = process.env.NODE_ENV == 'production';
console.log(isDev ? '🚀 Production Mode' : '👷 Development Mode');
connectDB();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(isDev ? 'combined' : 'dev'));
app.use('/api', routes);
app.use((req, res, next) => {
    next(new NotFoundError());
});
app.use((error, req, res, next) => {
    customErrorHandler(res, error);
});
export default app;
