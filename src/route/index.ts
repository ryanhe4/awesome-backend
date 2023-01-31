import { FastifyPluginAsync } from 'fastify'
import apiRoute from './api'

const route: FastifyPluginAsync = async (fastify) => {
  fastify.register(apiRoute, { prefix: '/api' })
}

export default route
