export default function logError(error) {
  let message = ''
  if (typeof error.message !== 'undefined') {
    message = error.message
    if (typeof error.field !== 'undefined') {
      message = `${error.field} ${message}`
    }
  } else {
    message = error.toString()
  }

  console.error(`${new Date().toLocaleString()} ${message.split('\n')[0]}`)
}
