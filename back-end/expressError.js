/** Express error that extends the normal JS error
 *  so a status can be added when an instance is made.
 * 
 * 
 * The error-handling middleware will return this.
 */

 class ExpressError extends Error {
     constructor(message, status) {
         super();
         this.message = message;
         this.status = status;
     }
 }

 /** 404 Not found error */

 class NotFoundError extends ExpressError {
     constructor(message = "Not Found") {
         super(message, 404);
     }
 }

 /** 401 Unauthorized error */

 class UnauthorizedError extends ExpressError {
     constructor(message = "Unauthorized") {
         super(message, 401);
     }
 }

/** 400 Bad Request error */

 class BadRequestError extends ExpressError {
     constructor(message = "Bad Request") {
         super(message, 400);
     }
 }

 /** 403 Bad Request error */

 class ForbiddenError extends ExpressError {
     constructor(message = "Bad Request") {
         super(message, 403);
     }
 }

 module.exports = {
  ExpressError,
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
  ForbiddenError,
};
