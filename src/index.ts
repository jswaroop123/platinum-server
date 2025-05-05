import { serve } from "@hono/node-server";
import { Hono } from "hono";

const allRoutes = new Hono();

allRoutes.get("", (context) => {
  return context.json({
    message: "Hello",
  });
});

serve(allRoutes, ({ port }) => {
  console.log(`\tRunning at http://localhost:${port}`);
});