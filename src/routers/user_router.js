import express from 'express'

const one_user_router = express.Router()
one_user_router.route('/users/me')
  .get((request, response) => {
    response.json({
      data: request.user || null,
    })
  })

export const user_router = express.Router()
user_router.use(one_user_router)
