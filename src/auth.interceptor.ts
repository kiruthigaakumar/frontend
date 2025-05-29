import { Injectable } from '@angular/core';
import {
    HttpInterceptorFn,
    HttpRequest,
    HttpHandlerFn
} from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const token = localStorage.getItem('authToken');

    if (token) {
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(authReq);
    }

    return next(req);
};
