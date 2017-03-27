export function make_update_handler(response, next_handler) {
  return (error, data) => {
    if (error !== null) {
      next_handler(error)
      return
    }

    response.json({
      data,
    })
  }
}
