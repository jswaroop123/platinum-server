import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const allroutes = new Hono()

allroutes.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: allroutes.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
