import express from 'express'

const all_users_router = express.Router()
all_users_router.route('/users')
  .get((request, response) => {
    response.json({})
  })
  .post((request, response) => {
    response.json({
      user: request.body,
    })
  })

const one_user_router = express.Router()
one_user_router.route('/users/:user_id')
  .get((request, response) => {
    response.json({
      user_id: request.params.user_id,
    })
  })
  .put((request, response) => {
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
