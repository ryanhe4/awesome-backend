import { Post } from '@prisma/client'

export const posts: Post[] = [
  {
    id: 1,
    title: '123123',
    content: '123123',
    password_hash: '123123',
    draftsman: '123123123',
    vote: 0,
    deleted: false,
    created_at: new Date(),
    updated_at: new Date(),
  },
]

export const post: Post = {
  id: 1,
  title: '123123',
  content: '123123',
  password_hash: '123123',
  draftsman: '123123123',
  vote: 0,
  deleted: false,
  created_at: new Date(),
  updated_at: new Date(),
}
