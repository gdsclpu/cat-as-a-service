import { Response } from 'express';
declare const customErrorHandler: (res: Response, error: any) => Promise<Response<any, Record<string, any>> | undefined>;
export { customErrorHandler };
