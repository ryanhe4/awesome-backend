import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import Fastify, {
  FastifyError,
  FastifyReply,
  FastifyRequest,
  errorCodes,
} from 'fastify'
import route from './route'

export function build() {
  const fastify = Fastify({
    logger: true,
  }).withTypeProvider<TypeBoxTypeProvider>()

  fastify.register(route)

  fastify.setErrorHandler(errorHandler)

  return fastify
}

function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (error instanceof errorCodes.FST_ERR_BAD_STATUS_CODE) {
    // Send error response
    reply.status(500).send({ ok: false })
  } else {
    // fastify will use parent error handler to handle this
    reply.status(error.statusCode ?? 500)
    reply.send(error.message)
  }
}
