import Fastify from 'fastify'

import config from './config.js'

const server = Fastify({
  logger: process.env.NODE_ENV === 'production'
})

async function start () {
  try {
    await server.listen({ port: config.port })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

export { server, start }
