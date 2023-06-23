import { Request, Response, NextFunction } from "express";
import { ObjectSchema, ValidationError } from "yup";

const requestValidator = (schema: ObjectSchema<any>) => 
  (request: Request, response: Response, next: NextFunction) => {
  try {
    schema.validateSync({
      body: request.body,
      query: request.query,
      params: request.params,
    }, {
      abortEarly: false,
      stripUnknown: true
    });
    next();
  } catch (yupError) {
    const error = yupError as ValidationError;
    response.status(400).json({
      "errorName": 'BAD REQUEST',
      "errorMessage": "The server cannot process the request due to an apparent client error.",
      "errorRawMessage": error.errors
    })
  }
};

export default requestValidator;
