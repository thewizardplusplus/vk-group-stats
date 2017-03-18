export function read_server_uri() {
  const host = process.env.VK_GROUP_STATS_SERVER_HOST || 'localhost'
  const port = process.env.PORT
    || process.env.VK_GROUP_STATS_SERVER_PORT
    || 4000
  return {
    host,
    port,
    authority_part: port !== 80 ? `${host}:${port}` : host,
  }
}
