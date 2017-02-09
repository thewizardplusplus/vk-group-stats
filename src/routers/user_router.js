import express from 'express'

function validate_request_body(request, response, next_handler) {
  request.checkBody({
    'email': {
      notEmpty: {
        errorMessage: 'parameter is required',
      },
      isEmail: {
        errorMessage: 'parameter must be an email',
      },
    },
    'password': {
      notEmpty: {
        errorMessage: 'parameter is required',
      },
    },
  })

  request.getValidationResult().then(result => {
    if (result.isEmpty()) {
      next_handler()
    } else {
      response.status(400).json({
        errors: result.array(),
      })
    }
  })
}

const all_users_router = express.Router()
all_users_router.route('/users')
  .get((request, response) => {
    response.json({})
  })
  .post(validate_request_body, (request, response) => {
    response.json({
      user: request.body,
    })
  })

const one_user_router = express.Router()
one_user_router.param('user_id', (request, response, next_handler) => {
  request.checkParams('user_id', 'parameter is required').notEmpty()
  request
    .checkParams('user_id', 'parameter must be a MongoDB ObjectId')
    .isMongoId()

  request.getValidationResult().then(result => {
    if (result.isEmpty()) {
      next_handler()
    } else {
      response.status(400).json({
        errors: result.array(),
      })
    }
  })
})
one_user_router.route('/users/:user_id')
  .get((request, response) => {
    response.json({
      user_id: request.params.user_id,
    })
  })
  .put(validate_request_body, (request, response) => {
    response.json({
      user_id: request.params.user_id,
      user: request.body,
    })
  })
  .delete((request, response) => {
    response.json({
      user_id: request.params.user_id,
    })
  })

export const user_router = express.Router()
user_router.use(all_users_router)
user_router.use(one_user_router)
