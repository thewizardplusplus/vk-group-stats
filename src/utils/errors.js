import util from 'util'
import {logger} from './logger'

class default_error {
  constructor(message) {
    this.message = message
  }
}

class validation_error extends default_error {
  constructor(message, field) {
    super(message)
    this.field = field
  }
}

class error_response {
  constructor(status, errors) {
    this.status = status
    this.errors = errors
  }
}

export function check_authentication(request, response, next_handler) {
  if (request.isAuthenticated()) {
    next_handler()
  } else {
    next_handler(new error_response(401, [
      new default_error(`authentication is required`),
    ]))
  }
}

export function validate_request(request, next_handler) {
  request.getValidationResult().then(result => {
    if (result.isEmpty()) {
      next_handler()
    } else {
      next_handler(new error_response(400, result.array().map(error => {
        return new validation_error(error.msg, error.param)
      })))
    }
  })
}

export function error_handler(error, request, response, next_handler) {
  if (response.headersSent) {
    next_handler(error)
    return
  }
  if (!(error instanceof error_response)) {
    error = new error_response(500, [
      new default_error(`unknown error: ${util.inspect(error)}`),
    ])
  }

  error.errors.forEach(error => {
    if (error instanceof validation_error) {
      logger.error(`"${error.field}" ${error.message}`)
    } else {
      logger.error(error.message)
    }
  })

  response.status(error.status).json({
    errors: error.errors,
  })
}
