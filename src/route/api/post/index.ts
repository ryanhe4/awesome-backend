import { FastifyPluginAsyncTypebox } from 'lib/types'
import { postService } from 'service/postService'
import { createPostSchema } from './schema'

const postRoute: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get('/', async () => {
    const posts = await postService.get()
    return posts
  })

  fastify.post('/', { schema: createPostSchema }, async (req, reply) => {
    const result = await postService.create(req.body)
    reply.status(201)
    return result
  })
}

export default postRoute
