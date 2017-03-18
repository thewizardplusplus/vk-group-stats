export function read_server_uri() {
  const port = process.env.PORT
    || process.env.VK_GROUP_STATS_SERVER_PORT
    || 4000
  return {
    port,
    uri: process.env.VK_GROUP_STATS_SERVER_URI
      || `http://localhost${port !== 80 ? `:${port}` : ''}/`,
  }
}
