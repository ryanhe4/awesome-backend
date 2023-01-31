import { Type } from '@sinclair/typebox'
import { routeSchema } from 'lib/routeScheme'

export const PostBody = Type.Object({
  title: Type.String(),
  content: Type.String(),
  draftsman: Type.String(),
  password: Type.String(),
})

const Result = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  content: Type.String(),
  draftsman: Type.String(),
  craeted_at: Type.Date(),
  vote: Type.Number(),
})

export const createPostSchema = routeSchema({
  tags: ['post'],
  body: PostBody,
  response: {
    201: Result,
    409: Type.String(),
  },
})
