import e from 'express'
import express, { NextFunction, Request, RequestHandler, Response } from 'express'


const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let status = err.status || 500
    console.log(err, "from globalErrorHandler")
    if (err.name === 'ValidationError') err.status = 400
    if (err.name === 'CastError') err.status = 404
    if (status === 500) err.message = "Please try again later"
    res.status(status).json({ message: err.message })
}


export default errorHandler
