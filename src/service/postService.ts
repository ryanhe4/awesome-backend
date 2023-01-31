import { Context, context } from 'db/context'

export interface CreatePostParam {
  title: string
  content: string
  draftsman: string
  password: string
}

export class PostService {
  ctx: Context

  constructor(ctx: Context) {
    this.ctx = ctx
  }

  async create(postItem: CreatePostParam) {
    const { title, content, draftsman, password } = postItem
    const item = await this.ctx.prisma.post.create({
      data: { title, content, draftsman, password_hash: password },
    })
    return {
      id: item.id,
      title: item.title,
      content: item.content ?? '',
      draftsman: item.draftsman,
      vote: item.vote,
      craeted_at: item.created_at,
    }
  }

  async get() {
    const posts = await this.ctx.prisma.post.findMany()
    return posts
  }

  async delete(id: number) {
    const post = await this.ctx.prisma.post.findUnique({
      where: {
        id,
      },
    })

    if (!post) throw new Error('post not exist')
    return true
  }
}

export const postService = new PostService(context)
