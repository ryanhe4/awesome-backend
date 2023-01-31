import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import { postService } from '../../../service/postService'

const postRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async () => {
    const posts = await postService.get()
    return posts
  })
  fastify.post('/', async (req: FastifyRequest, reply: FastifyReply) => {
    const { item } = req.body

    await postService.create({ item })

    reply.status(201)
    reply.send({ message: 'success' })
  })
}

export default postRoute
