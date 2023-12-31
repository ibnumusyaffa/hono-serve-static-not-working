import { serve } from "@hono/node-server"
import { serveStatic } from "@hono/node-server/serve-static"
import { Hono } from "hono"

const app = new Hono()
console.log("current working directory", process.cwd())

app.get("/", (c) => c.text("Hello Hono!"))
app.use("/static/*", serveStatic({ root: "./storage" }))
const port = 5000
console.log(`Server is running on portt ${port}`)

serve({
  fetch: app.fetch,
  port,
})
