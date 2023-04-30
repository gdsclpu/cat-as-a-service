export declare class CustomError extends Error {
    statusCode: number;
    data: any;
    constructor(args: {
        message?: string;
        statusCode?: number;
        data?: any;
    });
    toString(): {
        message: string;
        statusCode: number;
        data: any;
    };
}
export declare class NotFoundError extends CustomError {
    constructor();
}
