import Fastify, {
  FastifyError,
  FastifyReply,
  FastifyRequest,
  errorCodes,
} from 'fastify'
import route from './route'

export function build() {
  const fastify = Fastify({ logger: true })

  fastify.register(route)

  fastify.setErrorHandler(errorHandler)

  return fastify
}

function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  console.error(error)
  reply.send(error)
}
