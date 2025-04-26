import {
    Catch,
    ExceptionFilter,
    ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorDomain } from '../common/domain/error-domain';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        let status = 500;
        let message =
            'No se logró procesar la solicitud, comunicar al administrador';
        let error = 'Internal Server Error';

        if (exception instanceof ErrorDomain) {
            status = exception.code;
            error = exception.error;
            message = exception.message;
        }

        if (status === 500) {
            console.log(exception);
        }

        response.status(status).json({
            status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message,
            error,
        });
    }
}
