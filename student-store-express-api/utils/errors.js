
class ExpressError extends Error {
    constructor(message, status){
        this.super(message, status)
        this.message = message
        this.status = status
    }
}

class BadRequestError {
    constructor(message = 'Bad request', status = 400) {
        this.super(message, status)
    }
}

class NotFoundError {
    constructor(message = 'Not found', status = 404) {
        this.super(message, status)
    }
}

module.exports = {ExpressError, BadRequestError,  NotFoundError}
