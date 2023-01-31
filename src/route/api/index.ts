import { FastifyPluginAsync } from 'fastify'
import postRoute from './post'

const apiRoute: FastifyPluginAsync = async (fastify) => {
  fastify.register(postRoute, { prefix: '/post' })
}

export default apiRoute
