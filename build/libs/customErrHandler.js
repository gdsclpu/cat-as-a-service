import { CustomError } from './error';
const customErrorHandler = async (res, error) => {
    if (error instanceof CustomError) {
        return res
            .status(error.statusCode)
            .send({ success: false, message: error.message, data: error.data });
    }
    res.status(500).send({ success: false, message: 'Internal ServerError.' });
};
export { customErrorHandler };
