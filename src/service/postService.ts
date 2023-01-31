import { Context } from '../db/context'
import { Post } from '@prisma/client'
import { context } from '../db/context'

export class PostService {
  ctx: Context

  constructor(ctx: Context) {
    this.ctx = ctx
  }

  async create(postItem: Post) {
    const item = await this.ctx.prisma.post.create({
      data: { ...postItem },
    })
    return item
  }
  async get() {
    const posts = await this.ctx.prisma.post.findMany()
    return posts
  }
}

export const postService = new PostService(context)
