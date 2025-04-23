
class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // sets the message property and captures the stack trace

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}
