import { Context, createMockContext, MockContext } from '../../db/context'
import { PostService } from '../postService'
import { posts as post_fixture } from '../../../fixture/posts'

let mockCtx: MockContext
let ctx: Context

describe('postService', () => {
  beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
  })

  it('get', async () => {
    const postService = new PostService(ctx)
    expect(postService).toBeDefined()

    mockCtx.prisma.post.findMany.mockResolvedValue(post_fixture)

    const posts = await postService.get()
    expect(posts).toHaveLength(1)
    expect(posts).toBe(post_fixture)
  })
})
