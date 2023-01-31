import { build } from './server'

const app = build()
app.listen({ port: 3000 })
