import { Context, createMockContext, MockContext } from 'db/context'
import { CreatePostParam, PostService } from '../postService'
import { posts as post_fixture, post } from '../../../fixture/posts'

let mockCtx: MockContext
let ctx: Context

describe('postService', () => {
  beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
  })

  it('get posts', async () => {
    const postService = new PostService(ctx)
    expect(postService).toBeDefined()

    mockCtx.prisma.post.findMany.mockResolvedValue(post_fixture)

    const posts = await postService.get()
    expect(posts).toHaveLength(1)
    expect(posts).toBe(post_fixture)
  })

  it('create post', async () => {
    const postService = new PostService(ctx)

    const param: CreatePostParam = {
      title: post.title,
      content: post.content ?? '',
      draftsman: post.draftsman,
      password: post.password_hash,
    }

    mockCtx.prisma.post.create.mockResolvedValue(post)

    const exp = await postService.create(param)
    expect(exp.content).toBe(param.content)
    expect(exp.title).toBe(param.title)
    expect(exp.draftsman).toBe(param.draftsman)
  })

  it('update post', async () => {
    const postService = new PostService(ctx)
  })
  describe('delete post', () => {
    beforeEach(() => {
      mockCtx.prisma.post.findUnique.mockReset()
    })

    it('find and delete success', async () => {
      const postService = new PostService(ctx)

      mockCtx.prisma.post.findUnique.mockResolvedValue(post)

      const deleted = await postService.delete(1)
      expect(deleted).toBe(true)
    })
    it('find fail', async () => {
      const postService = new PostService(ctx)

      mockCtx.prisma.post.findUnique.mockResolvedValue(null)

      await expect(postService.delete(1)).rejects.toThrow(/exist/)
    })
  })
})
